import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiDimmerModule } from "../dimmer/internal";
import { SuiTransitionModule } from "../transition/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiModalService } from "./services/modal.service";
import { SuiModalComponent } from "./components/modal";
import { SuiModalDimmer } from "./components/dimmer";

@NgModule({
    imports: [
        CommonModule,
        SuiDimmerModule,
        SuiTransitionModule,
        SuiUtilityModule
    ],
    declarations: [
        SuiModalComponent,
        SuiModalDimmer
    ],
    exports: [
        SuiModalComponent
    ],
    providers: [
        SuiModalService
    ]
})
export class SuiModalModule {}
