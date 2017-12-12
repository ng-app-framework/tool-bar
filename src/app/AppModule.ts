import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgToolBarModule} from "./NgToolBarModule";

@Component({
    selector: 'app',
    template: `
        <div class="container-fluid">
            <div class="col-12 col-xs-12">
                <h3>Tool Bar Example</h3>
            </div>
            <div class="col-12 col-xs-12">
                <div class="well">
                    <div class="tool-bar">
                        <div class="tb-menu">
                            <ul class="nav nav-tabs menu-bar">
                                <li class="nav-item">
                                    <a href="javascript:" class="nav-link">
                                        <span class="fa fa-bars"></span>
                                        <span class="fa-label">File</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:" class="nav-link">
                                        <span class="fa fa-edit"></span>
                                        <span class="fa-label">Edit</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:" class="nav-link">
                                        <span class="fa fa-eye"></span>
                                        <span class="fa-label">View</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:" class="nav-link">
                                        <span class="fa fa-question"></span>
                                        <span class="fa-label">Help</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tb-content">
                            This is the body of the page. It will scroll if the content extends the container.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xs-12">
                <h3>HTML</h3>
                <pre>{{markup}}</pre>
            </div>
        </div>
        
    `,
    styles  : [
            `
            .well {
                margin-top: 50px;
                position: relative;
                min-height: 200px;
            }
        `
    ]
})
export class AppComponent {

    markup = `
<div class="container-fluid">
    <div class="col12 col-xs-12">
        <div class="well">
            <div class="tool-bar">
                <div class="tb-menu">
                    <ul class="nav nav-tabs menu-bar">
                        <li class="nav-item">
                            <a href="javascript:" class="nav-link">
                                <span class="fa fa-bars"></span>
                                <span class="fa-label">File</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:" class="nav-link">
                                <span class="fa fa-edit"></span>
                                <span class="fa-label">Edit</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:" class="nav-link">
                                <span class="fa fa-eye"></span>
                                <span class="fa-label">View</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:" class="nav-link">
                                <span class="fa fa-question"></span>
                                <span class="fa-label">Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tb-content">
                    This is the body of the page. It will scroll if the content extends the container.
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}

@NgModule({
    declarations: [AppComponent],
    imports     : [
        BrowserModule,
        CommonModule,
        NgToolBarModule
    ],
    exports     : [AppComponent],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class AppModule {

}
