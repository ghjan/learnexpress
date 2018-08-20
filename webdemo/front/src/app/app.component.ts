import {Component, OnInit} from '@angular/core';
import {JumbotronServive} from './jumbotron-servive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  lead: string;
  content: string;

  constructor(public jumServ: JumbotronServive) {

  }

  ngOnInit(): void {
    this.jumServ.jumb$.subscribe(
      jumb => {
        this.title = jumb.title;
        this.lead = jumb.lead;
        this.content = jumb.content;
      });

  }


}
