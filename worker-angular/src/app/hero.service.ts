import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }


}
