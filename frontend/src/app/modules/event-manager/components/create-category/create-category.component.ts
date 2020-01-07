import {filter, map, take} from 'rxjs/operators';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {eventManagerAddCategory} from '../../redux/event-manager-actions';
import {eventManagerGetSelectedEventId, eventManagerGetSelectedEventName, HeaderDescription} from '../../redux/event-manager-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../../containers/event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryComponent extends EventManagerRouterEntryComponent implements OnInit {

  form: FormGroup;

  step = 0;

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
    this.createForm();
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

  addRestriction() {
    this.restrictions.push(this.fb.group({
        name: [],
        type: [],
        minValue: [],
        maxValue: [],
        unit: [],
      })
    );
  }

  createForm() {
    this.form = this.fb.group({
      name: [],
      fightDuration: [],
      restrictions: this.fb.array([
        this.fb.group({
          name: [],
          type: [],
          minValue: [],
          maxValue: [],
          unit: [],
        })
      ])
    });
  }

  ngOnInit() {
  }

  nextStep() {
    if (this.step <= 1) {
      this.step++;
    }
  }

  previousStep() {
    if (this.step > 0) {
      this.step--;
    }
  }

  submitForm() {
    if (!this.form.invalid) {
      const createCategorySubscription = this.store.pipe(select(eventManagerGetSelectedEventId), map((competitionId: string) => {
        let cat = this.form.value as Category;
        cat = {...cat} as Category;
        return eventManagerAddCategory(competitionId, cat);
      })).subscribe(this.store);
      this.router.navigate(['..'], {relativeTo: this.route}).then(() => {
        createCategorySubscription.unsubscribe();
      });
    }
  }
}
