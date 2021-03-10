import { Component, OnInit } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {Router} from '@angular/router';
import { Post } from "../shared/post/post";
import {PostService} from '../shared/post/post.service';



@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./article.component.html",
    styleUrls: ['./article.component.css']
   
    
})
export class ArticleComponent  { 
    
    public post: Post;

    constructor(
        private router:Router, 
        private postService:PostService) 
    {
        this.post=new Post();
    }

    public submit2()
    {
       this.publish();
              
    }
    private publish()
    {
        this.postService.Publish(this.post)
            .subscribe(
                () => {   //function()
                    alert('Your Publish was successfully created.');
                    this.router.navigate(['/personel']);

                    
                },
                () => alert('Unfortunately we were unable to create your publish.')
            );
    }

    // onDrawerButtonTap(): void {
    //     const sideDrawer = <RadSideDrawer>Application.getRootView();
    //     sideDrawer.showDrawer();
    // }
}