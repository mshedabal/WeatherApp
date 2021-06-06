import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherComponent } from './weather/city-weather/city-weather.component';
import { HomeComponent } from './weather/home/home.component';
import { NotFoundComponent } from './weather/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cityReport/:id', component: CityWeatherComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:"**", component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
