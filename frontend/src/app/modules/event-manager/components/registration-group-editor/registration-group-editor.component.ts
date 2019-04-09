import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration-group-editor',
  templateUrl: './registration-group-editor.component.html',
  styleUrls: ['./registration-group-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationGroupEditorComponent implements OnInit {

  @Input()
  group: string | boolean;

  constructor() { }

  ngOnInit() {
  }

}
