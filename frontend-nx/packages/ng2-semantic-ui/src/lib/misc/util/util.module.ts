import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SuiComponentFactory} from "./services/component-factory.service";

@NgModule({
  imports: [CommonModule],
  providers: [
    SuiComponentFactory,
  ],
})
export class SuiUtilityModule {
}
