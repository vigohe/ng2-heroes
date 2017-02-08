import { Component, OnInit } from '@angular/core';
import {HeroeService} from "../service/heroe.service";
import {Heroe} from "../model/Heroe";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Heroe[];

  constructor(private _heroeService : HeroeService) { }

  ngOnInit() {
    this._heroeService.get().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
