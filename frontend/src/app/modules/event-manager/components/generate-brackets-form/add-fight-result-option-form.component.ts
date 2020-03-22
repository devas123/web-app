import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from '@devas123/ng2-semantic';
import {BracketsType, FightResultOption} from '../../../../commons/model/competition.model';

export class AddFightResultOptionModal extends ComponentModalConfig<IAddFightResultOptionContext, FightResultOption, void> {
  constructor(bracketsType: BracketsType, stageNumber: number, size = ModalSize.Small) {
    super(AddFightResultOptionFormComponent, {bracketsType, stageNumber});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}

export interface IAddFightResultOptionContext {
  stageNumber: number;
  bracketsType: BracketsType;
}

@Component({
  selector: 'app-add-group-form',
  template: `
    <div class="header">Add fight result options for stage #{{modal.context.stageNumber + 1}}</div>
    <div class="content">
      <div class="ui form" [formGroup]="form" [ngClass]="{error: form.invalid && form.touched}">
        <div class="ui field" *ngIf="modal.context.bracketsType ==='GROUP'">
          <div class="ui horizontal label">{{isDraw?.value ? 'Draw' : 'Win by'}}</div>
          <sui-checkbox class="ui toggle checkbox" [name]="'draw'"
                        (checkChange)="setIsDraw($event)">Is this a draw
          </sui-checkbox>
        </div>
        <div class="ui field" *ngIf="modal.context.bracketsType !=='GROUP'">
          <h4 class="ui header">Win by</h4>
        </div>
        <div class="ui eight wide field" [ngClass]="{error: shortName?.invalid && shortName?.touched}">
          <label for="shortName">Short name (will be displayed as a button on the scoreboard)</label>
          <input id="shortName" class="ui input" type="text"
                 placeholder="Short name"
                 formControlName="shortName"/>
        </div>
        <ng-container *ngIf="modal.context.bracketsType ==='GROUP'">
          <label>Points for the group stage.
            <div class="fields">
              <div class="ui six wide field" [ngClass]="{error: winnerPoints?.invalid && winnerPoints?.touched}">
                <input id="winnerPoints" class="ui input" type="number"
                       placeholder="Points for winner"
                       formControlName="winnerPoints"/>
              </div>
              <div class="ui six wide field" [ngClass]="{error: loserPoints?.invalid && loserPoints?.touched}">
                <input id="loserPoints" class="ui input" type="number"
                       placeholder="Points for loser"
                       formControlName="loserPoints"/>
              </div>
            </div>
          </label>
          <label>Additional points (optional, can be used if the points are equal).
            <div class="fields">
              <div class="ui six wide field" [ngClass]="{error: winnerAdditionalPoints?.invalid && winnerAdditionalPoints?.touched}">
                <input id="winnerAddPoints" class="ui input" type="number"
                       placeholder="Additional winner points"
                       formControlName="winnerAdditionalPoints"/>
              </div>
              <div class="ui six wide field" [ngClass]="{error: loserAdditionalPoints?.invalid && loserAdditionalPoints?.touched}">
                <input id="loserAddPoints" class="ui input" type="number"
                       placeholder="Additional loser points"
                       formControlName="loserAdditionalPoints"/>
              </div>
            </div>
          </label>
        </ng-container>
        <div class="ui field">
                      <textarea class="ui input" type="text"
                                placeholder="Description"
                                formControlName="description"></textarea>
        </div>
        <div class="ui error message">
          <p>{{getErrorMsg('Short name', shortName?.errors)}}</p>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="form.invalid" (click)="addOptions()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./generate-brackets-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFightResultOptionFormComponent implements OnInit {

  form: FormGroup;

  errorMessages = {
    required: 'Required',
    maxLength: 'Too long',
    max: 'Too big'
  };

  getErrorMsg(fieldName: string, errors: ValidationErrors) {
    if (errors) {
      return Object.keys(errors).map(error => {
        if (this.errorMessages.hasOwnProperty(error)) {
          return fieldName + ' is ' + this.errorMessages[error];
        } else {
          return fieldName + ' is invalid';
        }
      }).join(',');
    }
  }

  addOptions() {
    const groups = this.form.value as FightResultOption;
    if (groups) {
      this.modal.approve(groups);
    } else {
      this.modal.deny(undefined);
    }
    this.form.reset();
  }

  setIsDraw($event: boolean) {
    this.setFightOptionsControlValue({draw: $event});
  }

  get isDraw() {
    return this.form.get('draw');
  }

  get shortName() {
    return this.form.get('shortName');
  }

  get winnerPoints() {
    return this.form.get('winnerPoints');
  }

  get winnerAdditionalPoints() {
    return this.form.get('winnerAdditionalPoints');
  }

  get loserPoints() {
    return this.form.get('loserPoints');
  }

  get loserAdditionalPoints() {
    return this.form.get('loserAdditionalPoints');
  }

  setFightOptionsControlValue(patch: any) {
    this.form.patchValue(patch);
  }

  constructor(private fb: FormBuilder, public modal: SuiModal<IAddFightResultOptionContext, FightResultOption, void>) {
  }

  ngOnInit() {
    this.form = this.fightResultOptionConfig();
  }

  private fightResultOptionConfig() {
    return this.fb.group({
      description: [''],
      shortName: ['', [Validators.required, Validators.maxLength(10)]],
      draw: [false],
      winnerPoints: [0, [Validators.max(10)]],
      winnerAdditionalPoints: [0, [Validators.max(10)]],
      loserPoints: [0, [Validators.max(10)]],
      loserAdditionalPoints: [0, [Validators.max(10)]]
    });
  }
}
