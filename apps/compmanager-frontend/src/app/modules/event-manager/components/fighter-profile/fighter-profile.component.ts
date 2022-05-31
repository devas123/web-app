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
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {LookupFn, SuiMultiSelect} from "@frontend-nx/ng2-semantic-ui";
import {
  Academy,
  CategoryDescriptor,
  Competitor,
  CompetitorRegistrationStatus,
  FullAcademyInfo
} from "@frontend-nx/protobuf";
import {map} from "rxjs/operators";
import {InfoService} from "../../../../service/info.service";

@Component({
  selector: 'app-fighter-profile',
  templateUrl: './fighter-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FighterProfileComponent implements OnChanges, OnInit {

  @Output()
  categoryChanged = new EventEmitter<{ fighter: Competitor, newCategories: string[] }>();
  @Output()
  competitorChanged = new EventEmitter<{ fighter: Competitor }>();

  @Input()
  fighter: Competitor;

  @Input()
  categories: CategoryDescriptor[];

  statuses = Object.values(CompetitorRegistrationStatus);
  form: FormGroup;

  academyFormatter = (option: FullAcademyInfo, _query?: string) => option?.name.trim();
  academyLookup: LookupFn<FullAcademyInfo> = (query: string, _initial?: FullAcademyInfo) => {
    if (_initial) {
      return Promise.resolve(_initial)
    } else {
      return this.infoService.lookupAcademy(query).pipe(
        map(res => res.academies)
      ).toPromise()
    }
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
  formatter = (option: CategoryDescriptor, query?: string) => AddFighterComponent.displayCategory(option);
  optionsFilter = (options: CategoryDescriptor[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));

  constructor(private fb: FormBuilder, private infoService: InfoService) {
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get userId() {
    return this.form.get('userId');
  }

  get firstName() {
    return this.form.get('firstName') as FormControl;
  }

  get lastName() {
    return this.form.get('lastName') as FormControl;
  }

  get birthDate() {
    return this.form.get('birthDate') as FormControl;
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

  setCategories(categories: CategoryDescriptor[]) {
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

  setAcademy(academy: FullAcademyInfo) {
    this.form.patchValue({
      academy: <Academy>{
        name: academy.name,
        id: academy.id
      }
    });
  }

  createForm() {
    this.form = this.fb.group({
      email: [this.fighter?.email, [Validators.required]],
      userId: [this.fighter?.userId],
      firstName: [this.fighter?.firstName, [Validators.required]],
      lastName: [this.fighter?.lastName, [Validators.required]],
      birthDate: [this.fighter?.birthDate, [Validators.required]],
      academy: [this.fighter?.academy, [Validators.required]],
      category: [this.fighter?.categories, [Validators.required]],
      registrationStatus: [this.fighter?.registrationStatus, [Validators.required]],
      promo: [this.fighter?.promo]
    });
  }

  changeCategory() {
    const newCategories = this.category.value as CategoryDescriptor[];
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

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form) {
      this.form.patchValue({
        email: this.fighter?.email,
        userId: this.fighter?.userId,
        firstName: this.fighter?.firstName,
        lastName: this.fighter?.lastName,
        birthDate: this.fighter?.birthDate,
        academy: this.fighter?.academy,
        category: this.fighter?.categories,
        registrationStatus: this.fighter?.registrationStatus,
        promo: this.fighter?.promo,
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
