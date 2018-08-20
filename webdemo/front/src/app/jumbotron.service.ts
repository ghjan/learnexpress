import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export class Jumbotron {
  constructor(
    public title: string,
    public lead: string,
    public content: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class JumbotronServive {
  private jumbSource = new Subject<Jumbotron>();
  jumb$ = this.jumbSource.asObservable();

  setJumbotron(jumb: Jumbotron) {
    this.jumbSource.next(jumb);
  }
}
