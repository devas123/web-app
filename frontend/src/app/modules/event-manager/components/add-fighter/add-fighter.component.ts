import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Category} from '../../../../commons/model/competition.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppState, CommonAction} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventId} from '../../redux/event-manager-reducers';
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
  @Input()
  header = false;
  form: FormGroup;
  @Input()
  categories: Category[];

  @Output()
  closeClicked = new EventEmitter();

  @Output()
  fighterAdded = new EventEmitter<CommonAction>();
  private compIdSubscription;


  static displayCategory(cat: Category) {
    if (!!cat) {
      return `${cat.gender}/${AddFighterComponent.getAgeDivisionName(cat)}/${cat.beltType}/${AddFighterComponent.getWeightId(cat)}`;
    }
    return '';
  }

  static getAgeDivisionName(cat: Category) {
    if (cat.ageDivision) {
      return cat.ageDivision.id;
    } else {
      return 'ALL AGES';
    }
  }

  static getWeightId(cat: Category) {
    if (cat.weight) {
      return cat.weight.id;
    } else {
      return 'ALL WEIGHTS';
    }
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
    this.compIdSubscription = this.store.pipe(select(eventManagerGetSelectedEventId)).subscribe(competitionId => this.form.patchValue({competitionId}));
  }

  displayErrors() {
  }


  submitForm() {
    const competitor = {
      id: '',
      email: this.email.value,
      userId: this.userId.value,
      academy: this.academy.value,
      birthDate: this.birthDate.value,
      categoryId: this.category.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      promo: this.promo.value,
      registrationStatus: this.registrationStatus.value,
      competitionId: this.competitionId.value
    };
    this.fighterAdded.next(addCompetitor(this.competitionId.value, competitor));
    this.form.reset({
      competitionId: competitor.competitionId,
      category: competitor.categoryId
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
