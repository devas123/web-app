import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CategoryDescriptor, CategoryState, CompetitionProperties, RegistrationPeriod} from "@frontend-nx/protobuf";
import {MenuItem, RegistrationPeriodCollection} from "../../../../commons/model/competition.model";

@Component({
  selector: 'compmanager-frontend-competition-main-info-display',
  template: `
    <div class="ui container margins_container">
      <div class="hat_grid">
        <div class="reg_info_grid">
          <div class="ui  basic segment margins_container">
            <a class="ui green big left ribbon label"> Starts </a>
            <compmanager-frontend-date-field
              class="ui huge header"
              [date]="properties?.startDate"
              [showTime]="false"
              [timeZone]="properties?.timeZone"
            ></compmanager-frontend-date-field>
          </div>
          <div class="ui  basic segment">
            <ng-container
              *ngFor="let period of registrationPeriods; index as i; last as isLast; first as isFirst">
              <section>
                <a class="ui right small ribbon label"
                   [ngClass]="{blue: isFirst, red: (!isFirst && isLast), yellow: (!isFirst && !isLast)}">{{(registrationPeriods?.length < 2) ? 'Registration start' : period?.name}}</a>
                <compmanager-frontend-date-field
                  [date]="period?.start"
                  [showTime]="false"
                  [timeZone]="properties?.timeZone"
                ></compmanager-frontend-date-field>
              </section>
              <div class="ui divider" *ngIf="!isLast || registrationPeriods?.length < 2"></div>
              <section *ngIf="registrationPeriods?.length < 2">
                <a class="ui red right small ribbon  label">{{'Registration end'}}</a>
                <compmanager-frontend-date-field
                  [date]="period?.end"
                  [showTime]="false"
                  [timeZone]="properties?.timeZone"
                ></compmanager-frontend-date-field>
              </section>
            </ng-container>
          </div>
        </div>
        <div class="ui basic segment">
          <img class="ui bordered  image " src="/packages-frontend/src/assets/images/doc.jpg">
        </div>
        <div class="ui secondary center stackable menu full_line">
          <ng-container *ngFor="let menuItem of menu; trackBy: trackByMenu">
            <a class="item" [routerLink]="menuItem?.link"
               [ngClass]="{active: url?.endsWith(menuItem?.link)}">{{menuItem?.name}}</a>
          </ng-container>
        </div>
        <div class="ui clearing divider full_line"></div>
      </div>
      <div class="ui container margins_container no_side_margins">
        <router-outlet></router-outlet>
      </div>
    </div>`,
  styleUrls: ['./competition-main-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionMainInfoDisplayComponent {

  @Input()
  menu: MenuItem[];

  @Input()
  properties: CompetitionProperties;
  @Input()
  registrationPeriod: RegistrationPeriodCollection;
  @Input()
  timezone: string;
  @Input()
  categories: CategoryState[];
  @Input()
  url: string;
  trackByMenu = (index: number, menuItem: MenuItem) => menuItem.name;

  get registrationPeriods(): RegistrationPeriod[] {
    return Object.values(this.registrationPeriod)
  }
}
