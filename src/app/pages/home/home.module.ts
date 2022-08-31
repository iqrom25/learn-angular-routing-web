import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { WhyUsComponent } from './why-us/why-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
