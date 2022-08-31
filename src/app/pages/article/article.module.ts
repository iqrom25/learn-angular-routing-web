import { ArticleRoutingModule } from './article-routing.module';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [ArticleComponent, ArticlesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule
  ],
  exports:[ArticleComponent]
})
export class ArticleModule { }
