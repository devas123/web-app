import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {Academy, Category, Competitor} from '../../../../commons/model/competition.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {SuiMultiSelect} from "@frontend-nx/ng2-semantic-ui";

@Component({
  selector: 'app-fighter-profile',
  templateUrl: './fighter-profile.component.html',
  styleUrls: ['./fighter-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FighterProfileComponent implements  OnChanges {

  @Output()
  categoryChanged = new EventEmitter<{ fighter: Competitor, newCategories: string[] }>();
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

  setCategories(categories: Category[]) {
    this.form.patchValue({
      category: categories
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

  changeCategory() {
    const newCategories = this.category.value as Category[];
    const fighter = this.fighter;
    if (newCategories && fighter && fighter.categories && newCategories.length > 0) {
      this.categoryChanged.next({fighter, newCategories: newCategories.map(c => c.id)});
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
        category: '',
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

  enterSelectedOptions(select: SuiMultiSelect<any, any>) {
    select.selectedOptions = this.fighter?.categories?.map(c => this.categories.find(cat => cat.id === c));
  }
}
