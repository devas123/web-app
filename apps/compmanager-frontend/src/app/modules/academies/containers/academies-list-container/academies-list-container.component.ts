import { Component } from '@angular/core';

@Component({
  selector: 'compmanager-frontend-academies-list-container',
  template: `
    <div class="event_manager_header">
      <h2 class="ui header">Academies</h2>
    </div>
    <compmanager-frontend-academies-list-component [academies]="[]"></compmanager-frontend-academies-list-component>
  `,
  styles: [],
})
export class AcademiesListContainerComponent  {
  constructor() {}
}
