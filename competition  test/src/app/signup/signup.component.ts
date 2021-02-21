import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "Login",
    templateUrl: "./signup.component.html",
    styleUrls: ['./signup.component.css']
    
})
export class SignupComponent  { 
    public constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }
    public submit()
    {
        this.router.navigate(["login"]);
    }
    ngOnInit(): void {
        // Init your component properties here.
    }
}