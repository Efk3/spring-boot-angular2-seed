import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {HelloWorldComponent} from "../components/hello-world.component";
import {HelloWorldService} from "../components/hello-world.service";

@NgModule({
    bootstrap: [HelloWorldComponent],
    declarations: [HelloWorldComponent],
    imports: [BrowserModule, HttpModule],
    providers: [HelloWorldService]
})
export class MainModule {
}
