import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {AdjacencyList, AdjacencyListEntry} from '../../../../commons/model/competition.model';
import * as _ from 'lodash';
import {Dictionary} from '@ngrx/entity';
import {TypeInTree} from './restriction-item';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppAutocompleteDirective} from './autocomplete.directive';
import {CategoryRestriction} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-category-constructor',
  templateUrl: 'category-constructor.component.html',
  styleUrls: ['category-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryConstructorComponent implements OnChanges {

  constructor(private cd: ChangeDetectorRef) {
  }

  @Input()
  set restrictions(value: CategoryRestriction[]) {
    this._restrictions = value;
    if (value) {
      this.restrictionGroups = _.groupBy(value, 'name');
    } else {
      this.restrictionGroups = {};
    }
  }

  get root() {
    return this.selectedPath[0];
  }

  set root(value: string) {
    if (value) {
      this.selectedPath = [value];
    } else {
      this.selectedPath = [];
    }
  }

  @ViewChild('restrNameInput')
  restrictionNameInput: HTMLInputElement;

  @Input()
  competitionId: string;

  restrictionGroups: Dictionary<CategoryRestriction[]>;

  @Input()
  adjacencyLists: AdjacencyList<string>[];

  _restrictions: CategoryRestriction[];

  @Input()
  restrictionNames: string[];

  selectedPath: string[] = [];

  @Output()
  restrictionGroupAdded = new EventEmitter<string>();

  @Output()
  restrictionGroupRemoved = new EventEmitter<string>();

  @Output()
  removeRestrictionClicked = new EventEmitter<string>();

  @Output()
  restrictionLinked = new EventEmitter<{ restrictionId: string, root: string, parent: string[] }>();

  @Output()
  rootAdded = new EventEmitter<string>();

  @Output()
  rootRemoved = new EventEmitter<string>();

  @Output()
  restrictionUnLinked = new EventEmitter<{ restrictionId: string, root: string, parent: string }>();

  @Output()
  addRestrictionClicked = new EventEmitter<{ name: string, existing: string[] }>();

  @Output()
  generateCategories = new EventEmitter<{ restrictions: CategoryRestriction[], idTrees: AdjacencyList<string>[], restrictionNames: string[] }>();

  @Output()
  generatePreviewCategories = new EventEmitter<{ restrictions: CategoryRestriction[], idTrees: AdjacencyList<string>[], restrictionNames: string[] }>();

  @Output()
  clearPreviewCategories = new EventEmitter<void>();

  @Input()
  set options(value: string[]) {
    this._options = value;
    this.options$.next(value);
  }

  _options: string[];

  options$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  get opts$() {
    return this.options$.pipe(map(o => o.filter(v => !this.restrictionNames.includes(v))));
  }

  private selectRootAndAddAdjacencyList(id: string) {
    this.selectedPath = this.selectedPath[0] === id ? [] : [id];
    if (!this.adjacencyLists?.find(value => value.root === id)) {
      this.rootAdded.next(id);
    }
  }

  toggleLinkGroup(groupName: string, index: number, allAdded: boolean) {
    const restrictions = this.restrictionGroups[groupName];
    const root = this.root;
    if (Boolean(restrictions) && restrictions.length > 0 && Boolean(root)) {
      if (allAdded) {
        const restrictionId = restrictions[0]?.restrictionId
        const parent = this.getParent(restrictionId, index);
        if (parent) {
          restrictions.map(r => r.restrictionId).forEach(id => {
            this.sendRestrictionUnlinkedEvent([parent], id, root)
          });
        }
      } else {
        restrictions.map(r => r.restrictionId).forEach(id => this.sendRestrictionLinkedEvent(index, id, root));
      }
    }
  }

  toggleLink(id: string, index: number) {
    if (index === 0) {
      this.selectRootAndAddAdjacencyList(id);
    } else {
      const root = this.root;
      if (Boolean(root)
        && this.adjacencyLists
        && index > 0
        && id !== root
        && !this.adjacencyLists.find(l => l.root === id)) {
        const adjacencyListForRoot = this.adjacencyLists.find(l => l.root === root);
        if (adjacencyListForRoot) {
          const parent = adjacencyListForRoot.vertices.filter(v => v.children.includes(id) && this.selectedPath.includes(v.id));
          if (parent && parent.length > 0) {
            this.sendRestrictionUnlinkedEvent(parent, id, root);
          } else {
            this.sendRestrictionLinkedEvent(index, id, root);
          }
        }
      }
    }
    this.sendGeneratePreviewCategories();
  }

  private sendRestrictionUnlinkedEvent(parent: AdjacencyListEntry<string>[], id: string, root: string) {
    parent.forEach(p => {
      this.restrictionUnLinked.next({restrictionId: id, root: root, parent: p.id});
    });
  }

  private sendRestrictionLinkedEvent(index: number, id: string, root: string) {
    const parentColumnIds = this.restrictionGroups[this.restrictionNames[index - 1]].map(r => r.restrictionId);
    let parentIds = parentColumnIds?.filter(pid => this.selectedPath.includes(pid));
    if (index === 1) {
      parentIds = [root];
    }
    if (parentIds?.length > 0) {
      this.restrictionLinked.next({restrictionId: id, root: root, parent: parentIds});
    }
  }

  getParent(id: string, index: number): AdjacencyListEntry<string> | undefined {
    if (index === 0) {
      return undefined
    }
    const adjacencyListForRoot = this.adjacencyLists.find(l => l.root === this.root);
    const parent = adjacencyListForRoot?.vertices?.filter(v => v.children.includes(id) && this.selectedPath.includes(v.id));
    if (parent?.length > 0) {
      return parent[0];
    }
    return undefined
  }

  allRestrictionsInGroupSelected(groupName: string, index: number): boolean {
    const restrictions = this.restrictionGroups[groupName];
    if (Boolean(restrictions) && restrictions.length > 0) {
      const restriction = restrictions[0];
      const parent = this.getParent(restriction.restrictionId, index);
      if (!parent) {
        return false;
      }
      return this.isRestrictionInTree(parent.id, index - 1) && this.isConnectedToAllChildren(parent.id, index - 1);
    }
    return false;
  }

  addRestrictionName(element: HTMLInputElement) {
    const value = element.value;
    if (_.isEmpty(value)) {
      return;
    }
    if (!this.restrictionNames.includes(value)) {
      this.restrictionGroupAdded.next(value);
    }
    element.value = '';
    this.options$.next(this._options);
  }

  addRestriction(name: string) {
    if (name) {
      this.addRestrictionClicked.emit({name, existing: this.restrictionGroups[name]?.map(r => r.restrictionId) || []});
    }
  }

  treeInclusionType(id: string, index: number): TypeInTree {
    if (!this.root) {
      return 'not-connected';
    }
    let result: TypeInTree = 'not-connected';
    if (this.isRestrictionInTree(id, index)) {
      result = 'fully-connected';
      if (!this.isConnectedToAllChildren(id, index)) {
        result = 'partially-connected';
      }
    }
    return result;
  }

  isConnectedToAllChildren(id: string, index: number) {
    if (!this.selectedPath[0]) {
      return false;
    }
    if (index >= this.restrictionNames.length - 1) {
      return true;
    }
    const childrenName = this.restrictionNames[index + 1];
    const childrenIds = this.restrictionGroups[childrenName]?.map(r => r.restrictionId) || [];
    const root = this.selectedPath[0];
    const adjacencyList = this.adjacencyLists.find(l => l.root === root);
    if (!adjacencyList) {
      return false;
    }
    const entry = adjacencyList.vertices.find(v => v.id === id);
    if (!entry) {
      return false;
    }
    return childrenIds.reduce((previousValue, currentValue) => previousValue && entry.children.includes(currentValue), true);
  }

  isRestrictionInTree(id: string, index: number) {
    const root = this.root;
    if (!root) {
      return false;
    }
    if (root === id) {
      return true;
    }
    const selectedList = this.adjacencyLists.find(l => l.root === root);
    if (!selectedList) {
      return false;
    }
    const lastSelectedElement = this.selectedPath[index - 1];
    return this.selectedPath.includes(id) || !!selectedList.vertices.find(v => v.id === lastSelectedElement
      && v.children.includes(id));
  }

  togglePathInclusion(id: string, i: number) {
    if (i === 0) {
      this.selectRootAndAddAdjacencyList(id);
    } else {
      if (!this.selectedPath.includes(id) && (this.selectedPath.length - 1 === i || this.selectedPath.length === i)
        && this.isRestrictionInTree(id, i)) {
        if (this.selectedPath.length - 1 === i) {
          this.selectedPath[i] = id;
        }
        if (this.selectedPath.length === i) {
          this.selectedPath.push(id);
        }
      } else if (this.selectedPath[i] === id) {
        this.selectedPath = this.selectedPath.slice(0, i);
      }
    }
    this.cd.markForCheck();
  }

  canGenerateCategories() {
    return !_.isEmpty(this.adjacencyLists) && !_.isEmpty(this._restrictions) && !_.isEmpty(this.restrictionNames) && this.restrictionNames?.length > 1;
  }

  sendGenerateCategories() {
    if (this.canGenerateCategories()) {
      const restrictions = this._restrictions;
      this.generateCategories.next({
        idTrees: this.adjacencyLists,
        restrictionNames: this.restrictionNames,
        restrictions
      });
    }
  }

  sendGeneratePreviewCategories() {
    this.generatePreviewCategories.next({
      idTrees: this.adjacencyLists,
      restrictionNames: this.restrictionNames,
      restrictions: this._restrictions
    });
  }

  transform(items: any[], searchTerm: string) {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter(
      item =>
        item
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) === true
    );
  }

  handleInputChange(searchStr: string) {
    this.options$.next(this.transform(this._options, searchStr));
  }

  handleOptionSelected(restrNameInput: HTMLInputElement, value: string, autocmplt: AppAutocompleteDirective) {
    restrNameInput.value = value;
    autocmplt.close();
    this.options$.next(this._options);
  }

  isRootColumn(name: string): boolean {
    return this.restrictionNames && this.restrictionNames[0] === name;
  }

  deleteColumn(name: string) {
    if (name) {
      if (this.isRootColumn(name)) {
        this.root = undefined;
      }
      this.restrictionGroupRemoved.emit(name);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if ((changes.adjacencyLists || changes.restrictionNames) && this.canGenerateCategories()) {
      this.sendGeneratePreviewCategories();
    } else {
      this.clearPreviewCategories.next();
    }
  }

  deleteRestriction(restrictionId: string) {
    this.removeRestrictionClicked.next(restrictionId)
  }
}
