import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {displayCategory} from '../../../../commons/model/competition.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {
  Academy,
  CategoryDescriptor,
  Competitor,
  CompetitorRegistrationStatus,
  FullAcademyInfo
} from "@frontend-nx/protobuf";
import {InfoService} from "../../../../service/info.service";
import {LookupFn} from "@frontend-nx/ng2-semantic-ui";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-add-fighter',
  templateUrl: './add-fighter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFighterComponent  {

  form: FormGroup;
  @Input()
  categories: CategoryDescriptor[];

  @Output()
  closeClicked = new EventEmitter();

  @Output()
  fighterAdded = new EventEmitter<{ competitionId: string, competitor: Competitor }>();

  @Input()
  competitionId: string;


  static displayCategory(cat: CategoryDescriptor) {
    return displayCategory(cat);
  }


  optionsFilter = (options: CategoryDescriptor[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));
  academyOptionsFilter = (options: FullAcademyInfo[], filter: string) => options.filter(acad => acad.id && acad.name?.toLowerCase()?.includes(filter.toLowerCase()));
  formatter = (option: CategoryDescriptor, _query?: string) => AddFighterComponent.displayCategory(option);
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
  get email() {
    return this.form.get('email') as FormControl;
  }

  get userId() {
    return this.form.get('userId') as FormControl;
  }

  get firstName() {
    return this.form.get('firstName') as FormControl;
  }


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private infoService: InfoService) {
    this.createForm();
  }

  get lastName() {
    return this.form.get('lastName') as FormControl;
  }

  get birthDate() {
    return this.form.get('birthDate') as FormControl;
  }

  get academy() {
    return this.form.get('academy') as FormControl;
  }

  get category() {
    return this.form.get('category') as FormControl;
  }

  get registrationStatus() {
    return this.form.get('registrationStatus');
  }

  get promo() {
    return this.form.get('promo');
  }

  setCategoryIds(categories: CategoryDescriptor[]) {
    this.form.patchValue({
      category: categories
    });
  }

  setAcademy(academy: FullAcademyInfo) {
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
      academy: ['', [Validators.required]],
      category: ['', [Validators.required]],
      registrationStatus: [CompetitorRegistrationStatus.COMPETITOR_REGISTRATION_STATUS_PAYMENT_PENDING],
      promo: ['']
    });
  }

  submitForm() {
    const categoryIds = this.category.value.map(c => c.id);
    const competitor = {
      id: '',
      email: this.email.value,
      userId: this.userId.value,
      academy: <Academy>{name: this.academy.value?.name, id: this.academy.value?.id},
      birthDate: this.birthDate.value,
      categories: categoryIds,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      promo: this.promo.value,
      registrationStatus: this.registrationStatus.value,
      competitionId: this.competitionId
    } as Competitor;
    this.fighterAdded.next({competitionId: this.competitionId, competitor});
  }

  updateBirthDate(date: Date) {
    this.form.patchValue({
      birthDate: date
    })
  }
}
