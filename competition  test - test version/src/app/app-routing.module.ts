import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { PostComponent} from './post/post.component';
import { PersonelComponent} from './personel/personel.component';
import { ArticleComponent} from './article/article.component';


const routes: Routes = [
    { path: "", redirectTo: "/post", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    // { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "post", component: PostComponent },
    { path: "personel", component: PersonelComponent },
    { path: "article", component: ArticleComponent },
    // { path: "post", loadChildren: () => import("~/app/post/post.module").then((m) => m.PostModule) },
    // { path: "signup", loadChildren: () => import("~/app/signup/signup.module").then((m) => m.SignupModule) }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
