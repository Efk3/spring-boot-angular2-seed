import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";
import {HelloWorldService} from "./hello-world.service";

@Component({
    selector: 'hello-world-app',
    templateUrl: 'hello-world.template.html',
    styleUrls: ['hello-world.style.css']
})
export class HelloWorldComponent implements OnInit {

    title: string = "Let's wait..";

    constructor(private helloWorldService: HelloWorldService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.helloWorldService.getHelloWorld().subscribe((result: Response) => {
                this.title = result.text();
            });
        }, 2000);
    }

}
