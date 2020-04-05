import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuiTransitionModule} from '../transition/internal';
import {SuiUtilityModule} from '../../misc/util/internal';
import {SuiPopupDirective} from './directives/popup.directive';
import {SuiPopupArrow} from './components/popup-arrow';
import {SuiPopup} from './components/popup';
import {SuiPopupConfig} from './services/popup.service';
import {SuiPopupComponentController} from './classes/popup-component-controller';

@NgModule({
  imports: [
    CommonModule,
    SuiTransitionModule,
    SuiUtilityModule
  ],
  declarations: [
    SuiPopupComponentController,
    SuiPopupDirective,
    SuiPopupArrow,
    SuiPopup
  ],
  exports: [
    SuiPopupComponentController,
    SuiPopupDirective,
    SuiPopup
  ],
  providers: [
    SuiPopupConfig
  ],
  entryComponents: [
    SuiPopup
  ]
})

export class SuiPopupModule {
}
