import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {AdjacencyList, CategoryRestriction} from '../../../../commons/model/competition.model';
import * as _ from 'lodash';
import {Dictionary} from '@ngrx/entity';
import {TypeInTree} from './restriction-item';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppAutocompleteDirective} from './autocomplete.directive';

@Component({
  selector: 'app-category-constructor',
  templateUrl: 'category-constructor.component.html',
  styleUrls: ['category-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryConstructorComponent {

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

  toggleLink(id: string, index: number) {
    if (index === 0) {
      this.selectRootAndAddAdjacencyList(id);
    } else {
      const root = this.root;
      if (root
        && this.adjacencyLists
        && index > 0
        && id !== root
        && !this.adjacencyLists.find(l => l.root === id)) {
        const listForRoot = this.adjacencyLists.find(l => l.root === root);
        if (listForRoot) {
          const parent = listForRoot.vertices.filter(v => v.children.includes(id) && this.selectedPath.includes(v.id));
          if (parent && parent.length > 0) {
            parent.forEach(p => {
              this.restrictionUnLinked.next({restrictionId: id, root: root, parent: p.id});
            });
          } else {
            const parentColumnIds = this.restrictionGroups[this.restrictionNames[index - 1]].map(r => r.id);
            let parentIds = parentColumnIds.filter(pid => this.selectedPath.includes(pid));
            if (index === 1) {
              parentIds = [root];
            }
            if (parentIds && parentIds.length > 0) {
              this.restrictionLinked.next({restrictionId: id, root: root, parent: parentIds});
            }
          }
        }
      }
    }
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
      this.addRestrictionClicked.emit({name, existing: this.restrictionGroups[name]?.map(r => r.id) || []});
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
    const childrenIds = this.restrictionGroups[childrenName]?.map(r => r.id) || [];
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
    return !_.isEmpty(this.adjacencyLists) && !_.isEmpty(this._restrictions) && !_.isEmpty(this.restrictionNames);
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

  deleteColumn(name: string) {
    if (name) {
      this.restrictionGroupRemoved.emit(name);
    }
  }
}
