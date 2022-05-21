import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent  {

  constructor(private location: Location) { }

  navigateBack() {
    this.location.back();
  }

}
