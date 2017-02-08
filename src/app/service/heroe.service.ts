import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Heroe} from "../model/Heroe";

@Injectable()
export class HeroeService {

  constructor(public http : Http) {}

  get() : Observable<Heroe []> {
    return this.http.get("/api/heroes")
      .map((res : Response) => res.json())
      .catch((error:any) => Observable.throw('Server error'));
  }

}
