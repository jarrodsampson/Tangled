import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public http: Http) {
          this.initData(http);
  }

  title = 'app works!';
  testimonies = [];
  logError = "";

  initData(http) {
          this.http.get('src/data.json')
              .map(res => res.json())
              .subscribe(
                  data => this.testimonies = data,
                  () => console.log("json data", this.testimonies)
          );

  }


}
