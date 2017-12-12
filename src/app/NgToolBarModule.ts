import {NgModule} from '@angular/core';
import {ToolBarComponent} from "./Component/ToolBarComponent";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        ToolBarComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        ToolBarComponent
    ],
    providers   : []
})
export class NgToolBarModule {

    constructor() {

    }
}
