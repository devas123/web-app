import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Category, Competitor, displayCategory} from '../../../../commons/model/competition.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppState, CommonAction, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {addCompetitor} from '../../redux/event-manager-actions';

@Component({
  selector: 'app-add-fighter',
  templateUrl: './add-fighter.component.html',
  styleUrls: ['./add-fighter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFighterComponent implements OnInit, OnDestroy {

  @Input()
  collapsed = false;

  form: FormGroup;
  @Input()
  categories: Category[];

  @Output()
  closeClicked = new EventEmitter();

  @Output()
  fighterAdded = new EventEmitter<CommonAction>();
  private compIdSubscription;


  static displayCategory(cat: Category) {
    return displayCategory(cat);
  }



  optionsFilter = (options: Category[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

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


  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.compIdSubscription) {
      this.compIdSubscription.unsubscribe();
    }
  }

  setCategoryId(category: Category) {
    this.form.patchValue({
      category: category
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
    const categoryId = this.category.value.id;
    const competitor = {
      id: '',
      email: this.email.value,
      userId: this.userId.value,
      academy: this.academy.value,
      birthDate: this.birthDate.value,
      categories: [categoryId],
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      promo: this.promo.value,
      registrationStatus: this.registrationStatus.value,
      competitionId: this.competitionId.value
    } as Competitor;
    this.fighterAdded.next(addCompetitor(this.competitionId.value, categoryId, competitor));
    this.form.reset({
      competitionId: competitor.competitionId,
      category: categoryId
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
