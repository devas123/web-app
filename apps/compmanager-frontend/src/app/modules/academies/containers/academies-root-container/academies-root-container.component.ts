import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'compmanager-frontend-academies-root-container',
  template: `
    <div>
      <p>academies-root-container works!</p>
      <router-outlet></router-outlet>
    </div> `,
  styles: [],
})
export class AcademiesRootContainerComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
