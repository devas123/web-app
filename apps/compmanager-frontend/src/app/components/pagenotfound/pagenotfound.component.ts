import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent  {

  constructor(private location: Location) {
  }

  goback() {
    this.location.back();
  }

}
