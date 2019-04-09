import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Academy, Category, Competitor} from '../../../../commons/model/competition.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';

@Component({
  selector: 'app-fighter-profile',
  templateUrl: './fighter-profile.component.html',
  styleUrls: ['./fighter-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FighterProfileComponent implements OnInit, OnChanges {

  @Output()
  categoryChanged = new EventEmitter<{ fighter: Competitor, newCategory: string }>();
  @Output()
  competitorChanged = new EventEmitter<{ fighter: Competitor }>();

  @Input()
  fighter: Competitor;

  @Input()
  categories: Category[];

  @Input()
  academies: Academy[];

  statuses = ['UNKNOWN', 'PAYMENT_PENDING', 'SUCCESS', 'SUCCESS_UNACCEPTED', 'SUCCESS_CONFIRMED', 'REFUSED'];

  form: FormGroup;

  _type: string;

  @Input()
  set type(value: string) {
    this._type = value;
  }

  /*
   * email: string;
  userId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  academy: string;
  categoryId: Category;
  competitionId: string;
  registrationStatus: string;
  promo: string; */

  displayCategory = (category: string) => this.getCategoryName(category);
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);
  optionsFilter = (options: Category[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));
  academyFormatter = (option: Academy, query?: string) => option.name || option.id;
  academyOptionsFilter = (options: Academy[], filter: string) => options.filter(ac => ac.name && ac.name.toLowerCase().includes(filter.toLowerCase()));

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  get email() {
    return this.form.get('email');
  }

  get userId() {
    return this.form.get('userId');
  }

  get firstName() {
    return this.form.get('firstName');
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

  get registrationStatus() {
    return this.form.get('registrationStatus');
  }

  get promo() {
    return this.form.get('promo');
  }

  setCategoryId(category: Category) {
    this.form.patchValue({
      category: category
    });
  }

  setRegistrationStatus(status: string) {
    if (status) {
      this.form.patchValue({
        registrationStatus: status
      });
    }
  }

  setBirthDate(birthDate: Date) {
    if (birthDate) {
      this.form.patchValue(
        {
          birthDate: birthDate
        });
    }
  }

  setAcademy(academy: Academy) {
    this.form.patchValue({
      academy: academy.name
    });
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      userId: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: [''],
      birthDate: ['', [Validators.required]],
      academy: ['', [Validators.required]],
      category: ['', [Validators.required]],
      registrationStatus: ['', [Validators.required]],
      promo: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  changeCategory() {
    const newCategory = this.category.value;
    const fighter = this.fighter;
    if (newCategory && fighter && fighter.categoryId && fighter.categoryId !== newCategory.id) {
      this.categoryChanged.next({fighter, newCategory});
    }
  }

  changeProperty(fieldName: string) {
    const value = this.form.get(fieldName).value;
    const fighter = {...this.fighter};
    fighter[fieldName] = value;

    this.competitorChanged.next({fighter});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fighter) {
      this.form.patchValue({
        email: this.fighter.email,
        userId: this.fighter.userId,
        firstName: this.fighter.firstName,
        lastName: this.fighter.lastName,
        birthDate: this.fighter.birthDate,
        academy: this.fighter.academy,
        category: this.getCategoryName(this.fighter.categoryId),
        registrationStatus: this.fighter.registrationStatus,
        promo: this.fighter.promo,
      });
    }
  }

  getCategoryName(categoryId: string): string {
    if (this.categories) {
      const cat = this.categories.find(c => c.id === categoryId);
      if (cat) {
        return AddFighterComponent.displayCategory(cat);
      }
    }
    return categoryId;
  }
}
