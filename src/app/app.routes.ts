import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./heroes/heroes.component";
/**
 * Created by vigohe on 08-02-17.
 */

export const ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent}
];
