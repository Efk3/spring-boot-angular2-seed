import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class HelloWorldService {

    constructor(private http: Http) {
    }

    public getHelloWorld() {
        return this.http.get('rest/example');
    }

}