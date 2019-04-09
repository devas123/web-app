import {map} from 'rxjs/operators';
import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {createCompetition} from '../../../../actions/actions';
import {AppState, CompetitionProperties, RegistrationInfo, selectUser} from '../../../../reducers';
import {Account} from '../../../account/model/Account';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEventComponent implements OnInit, OnDestroy {

  form: FormGroup;
  @Output()
  createCompetition: EventEmitter<CompetitionProperties>;
  private createCompetitionSubscription: Subscription;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  get competitionName() {
    return this.form.get('competitionName');
  }

  // get registrationFee() {
  //   return this.form.get('registrationFee');
  // }

  get registrationOpen() {
    return this.form.get('registrationOpen');
  }

  createForm() {
    this.form = this.fb.group({
      competitionName: ['', [Validators.required]],
      // registrationFee: ['1500'],
      registrationOpen: [false]
    });
  }

  displayErrorList() {
    // return displayErrors(this.userForm)

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.createCompetitionSubscription) {
      this.createCompetitionSubscription.unsubscribe();
    }
  }

  submitForm() {
    this.createCompetitionSubscription = this.store.pipe(
      select(selectUser),
      map((user: Account) => {
        const props = {} as CompetitionProperties;
        const regInfo = {} as RegistrationInfo;
        regInfo.registrationOpen = this.registrationOpen.value || false;
        props.creatorId = user.userId;
        props.competitionName = this.competitionName.value;
        // props.registrationFee = this.registrationFee.value || '1500';
        props.registrationInfo = regInfo;
        props.id = '';
        props.schedulePublished = false;
        props.bracketsPublished = false;
        return createCompetition(props);
      })).subscribe(this.store);
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
