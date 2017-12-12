import {Component, ElementRef, ViewChild, ViewEncapsulation} from "@angular/core";
import {Value} from "@ng-app-framework/core";

@Component({
    selector     : '.tool-bar',
    templateUrl  : './assets/tool-bar.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls    : ['./assets/tool-bar.scss']
})
export class ToolBarComponent {


    @ViewChild('top')
    top: ElementRef;
    @ViewChild('bottom')
    bottom: ElementRef;

    isBottomVisible() {
        return Value.hasLength(this.bottom.nativeElement.children);
    }

    isTopVisible() {
        return Value.hasLength(this.top.nativeElement.children);
    }
}
