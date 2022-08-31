import { ArticleRoutingModule } from './article/article-routing.module';
import { ArticleModule } from './article/article.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';

const components = [
  PagesComponent,
  AboutComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    HomeModule,
    HomeRoutingModule,
    PagesRoutingModule
  ],
  exports:[PagesComponent]
})
export class PagesModule { }
