import { AboutComponent } from './about/about.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: '',
        loadChildren: async () => {
            const result = await import('./home/home.module');
            return result.HomeModule;
        }

    },
    {
        path: 'about',
       component:AboutComponent
    },
    {
        path:'article',
        loadChildren: async () => {
            const result = await import('./article/article.module')
            return result.ArticleModule;
        }
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }