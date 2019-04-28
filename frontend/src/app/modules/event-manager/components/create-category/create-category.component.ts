import {map} from 'rxjs/operators';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {eventManagerAddCategory} from '../../redux/event-manager-actions';
import {eventManagerGetSelectedEventId} from '../../redux/event-manager-reducers';
import {Category} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryComponent implements OnInit {

  form: FormGroup;

  step = 0;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  get gender() {
    return this.form.get('gender');
  }

  get beltType() {
    return this.form.get('beltType');
  }

  get fightDuration() {
    return this.form.get('fightDuration');
  }

  get weightName() {
    return this.form.get(['weight', 'id']);
  }

  get weightMaxValue() {
    return this.form.get(['weight', 'maxvalue']);
  }

  get weightMinValue() {
    return this.form.get(['weight', 'minvalue']);
  }

  get ageDivisionId() {
    return this.form.get(['ageDivision', 'id']);
  }

  get ageDivisionMaxAge() {
    return this.form.get(['ageDivision', 'maximalAge']);
  }

  get ageDivisionMinAge() {
    return this.form.get(['ageDivision', 'minimalAge']);
  }

  createForm() {
    this.form = this.fb.group({
      gender: ['', [Validators.required]],
      weight: this.fb.group({
        id: [''],
        maxvalue: [],
        minvalue: []
      }),
      beltType: [''],
      fightDuration: [],
      ageDivision: this.fb.group({
        id: [''],
        minimalAge: [],
        maximalAge: []
      })
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
        let cat = {
          ageDivision: {
            id: this.ageDivisionId.value,
            maximalAge: this.ageDivisionMaxAge.value,
            minimalAge: this.ageDivisionMinAge.value
          },
          gender: this.gender.value,
          weight: {
            id: this.weightName.value,
            minValue: this.weightMinValue.value,
            maxValue: this.weightMaxValue.value,
          },
          beltType: this.beltType.value,
          fightDuration: this.fightDuration.value,
        } as Category;
        cat = {...cat} as Category;
        return eventManagerAddCategory(competitionId, cat);
      })).subscribe(this.store);
      this.router.navigate(['..'], {relativeTo: this.route}).then(() => {
        createCategorySubscription.unsubscribe();
      });
    }
  }
}
