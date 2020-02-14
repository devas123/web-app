import {filter, map, take} from 'rxjs/operators';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {eventManagerAddCategory} from '../../redux/event-manager-actions';
import {eventManagerGetSelectedEventName} from '../../redux/event-manager-reducers';
import {
  Category, CategoryRestriction,
  HeaderDescription, RangeRestriction,
  RestrictionType,
  restrictionTypes
} from '../../../../commons/model/competition.model';
import {
  ComponentCommonMetadataProvider,
  EventManagerRouterEntryComponent
} from '../../containers/event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {defaultRestrictions} from './default-restrictions';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryComponent extends EventManagerRouterEntryComponent implements OnInit {

  form: FormGroup;

  controlGroupAlias: Record<RestrictionType, any> = {
    Range: {name: [], type: ['Range'], minValue: [], maxValue: [], unit: [], alias: [], editMode: [false]},
    Value: {name: [], type: ['Value'], value: [], editMode: [false]}
  };

  step = 0;
  types: RestrictionType[] = restrictionTypes;
  useRestrictionValues = false;



  _category: Category;


  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router, private route: ActivatedRoute, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name), take(1), map(name => <HeaderDescription>{
        header: 'Create category',
        subheader: name
      })),
      menu: [
        {
          name: 'Return',
          action: () => this.router.navigate(['..'], {relativeTo: this.route})
        }
      ]
    }, menuService);
   // this.createForm();
  }

  get fightDuration() {
    return this.form.get('fightDuration');
  }

  get restrictions() {
    return this.form.get('restrictions') as FormArray;
  }

  get name() {
    return this.form.get('name');
  }

  get registrationOpen() {
    return this.form.get('registrationOpen');
  }

  restrictionType(i: number) {
    return this.restrictions.controls[i].get('type').value;
  }

  restrictionName(i: number) {
    return this.restrictions.controls[i].get('name').value || 'Unnamed';
  }

  restrictionValue(restriction: AbstractControl) {
    return restriction.get('type').value === 'Range' ? `${(restriction.get('minValue').value || 0) + '-' + (restriction.get('maxValue').value || 100) + ' ' + (restriction.get('unit').value || '')} ` : restriction.get('value').value;
  }

  @Input()
  set category(value: Category) {
    this._category = value;
    this.createForm();
  }

  get category(): Category {
    return this._category;
  }

  drop(event: CdkDragDrop<string[]>) {
    const dir = event.currentIndex > event.previousIndex ? 1 : -1;
    const from = event.previousIndex;
    const to = event.currentIndex;
    const temp = this.restrictions.at(from);
    for (let i = from; i * dir < to * dir; i = i + dir) {
      const current = this.restrictions.at(i + dir);
      this.restrictions.setControl(i, current);
    }
    this.restrictions.setControl(to, temp);
  }

  changeRestrictionType(i: number, type: RestrictionType) {
    this.restrictions.setControl(i, this.fb.group({
      ...this.controlGroupAlias[type],
      name: this.restrictions.controls[i].get('name').value || 'Unnamed',
      editMode: [true]
    }));
  }


  addRestriction() {
    this.restrictions.push(this.fb.group(this.controlGroupAlias.Value));
  }


  createForm() {
    console.log(this._category);
    this.form = this.fb.group({
      name: [this.category.name],
      fightDuration: [this.category.fightDuration],
      registrationOpen: [this.category.registrationOpen],
      restrictions: this.fb.array(this.category.restrictions.map(x => this.fb.group(x.type === 'Value' ?
        {...this.controlGroupAlias.Value, name: [x.name], value: [x.value]} :
        {
          ...this.controlGroupAlias.Range,
          name: [x.name],
          minValue: [x.minValue],
          maxValue: [x.maxValue],
          unit: [x.unit]
        })))
    });
  }

/*  createForm() {
    this.form = this.fb.group({
      name: [],
      fightDuration: [],
      registrationOpen: [true],
      restrictions: this.fb.array(defaultRestrictions.map(x => this.fb.group(x.type === 'Value' ?
        {...this.controlGroupAlias.Value, name: [x.name], value: [x.value]} :
        {
          ...this.controlGroupAlias.Range,
          name: [x.name],
          minValue: [x.minValue],
          maxValue: [x.maxValue],
          unit: [x.unit]
        })))
    });
  }*/

  ngOnInit() {
  }


  test() {
    let cat = this.form.value as Category;
    cat = {...cat} as Category;
    console.log(cat);
  }

  submitForm() {
    if (!this.form.invalid) {
      const createCategorySubscription = this.store.pipe(select(getSelectedEventId), map((competitionId: string) => {
        let cat = this.form.value as Category;
        cat = {...cat} as Category;
        return eventManagerAddCategory(competitionId, cat);
      })).subscribe(this.store);
      this.router.navigate(['..'], {relativeTo: this.route}).then(() => {
        createCategorySubscription.unsubscribe();
      });
    }
  }

  removeRestriction(i: number) {
    this.restrictions.removeAt(i);
  }


  setRegistrationOpen(event: boolean) {
    this.registrationOpen.patchValue(event);
  }
}
