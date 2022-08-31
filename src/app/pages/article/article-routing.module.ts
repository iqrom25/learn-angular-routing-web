import { ArticleComponent } from './article.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticlesComponent } from './articles/articles.component';


const routes: Routes = [
    {
        path: '',
        component: ArticleComponent

    },
    {
        path: ':id',
        component: ArticlesComponent
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule { }