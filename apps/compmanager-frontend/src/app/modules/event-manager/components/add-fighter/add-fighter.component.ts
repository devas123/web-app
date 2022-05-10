import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Academy, Category, Competitor, displayCategory} from '../../../../commons/model/competition.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {addCompetitor} from '../../redux/event-manager-actions';
import {generateUuid} from "../../../account/utils";

@Component({
  selector: 'app-add-fighter',
  templateUrl: './add-fighter.component.html',
  styleUrls: ['./add-fighter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFighterComponent implements  OnDestroy {

  @Input()
  collapsed = false;

  form: FormGroup;
  @Input()
  categories: Category[];

  @Input()
  academies: Academy[];

  @Output()
  closeClicked = new EventEmitter();

  @Output()
  fighterAdded = new EventEmitter<any>();
  private compIdSubscription;



  static displayCategory(cat: Category) {
    return displayCategory(cat);
  }



  optionsFilter = (options: Category[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));
  academyOptionsFilter = (options: Academy[], filter: string) => options.filter(acad => acad.id && acad.name?.toLowerCase()?.includes(filter.toLowerCase()));
  formatter = (option: Category, _query?: string) => AddFighterComponent.displayCategory(option);
  academyFormatter = (option: Academy, _query?: string) => option?.name.trim();

  get email() {
    return this.form.get('email');
  }

  get userId() {
    return this.form.get('userId');
  }

  get firstName() {
    return this.form.get('firstName');
  }


  constructor(private store: Store<AppState>, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get birthDate() {
    return this.form.get('birthDate');
  }

  get academy() {
    return this.form.get('academy');
  }

  get category() {
    return this.form.get('category');
  }

  get competitionId() {
    return this.form.get('competitionId');
  }

  get registrationStatus() {
    return this.form.get('registrationStatus');
  }

  get promo() {
    return this.form.get('promo');
  }


  ngOnDestroy() {
    if (this.compIdSubscription) {
      this.compIdSubscription.unsubscribe();
    }
  }

  setCategoryIds(categories: Category[]) {
    this.form.patchValue({
      category: categories
    });
  }

  setAcademy(academy: Academy) {
    this.form.patchValue({
      academy: academy
    });
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      userId: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      academy: [''],
      category: ['', [Validators.required]],
      competitionId: ['', [Validators.required]],
      registrationStatus: ['UNKNOWN'],
      promo: ['']
    });
    this.compIdSubscription = this.store.pipe(select(getSelectedEventId)).subscribe(competitionId => this.form.patchValue({competitionId}));
  }

  submitForm() {
    const categoryIds = this.category.value.map(c => c.id);
    const competitor = {
      id: '',
      email: this.email.value,
      userId: this.userId.value,
      academy: <Academy>{name: this.academy.value, id: generateUuid()},
      birthDate: this.birthDate.value,
      categories: categoryIds,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      promo: this.promo.value,
      registrationStatus: this.registrationStatus.value,
      competitionId: this.competitionId.value
    } as Competitor;
    this.fighterAdded.next(addCompetitor(this.competitionId.value, competitor));
    this.form.reset({
      competitionId: competitor.competitionId,
      category: categoryIds
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  updateBirthDate(date: Date) {
    this.form.patchValue({
      birthDate: date
    })
  }
}
