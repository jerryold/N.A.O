import { Component, NgZone } from "@angular/core";
import { Application } from "@nativescript/core";
import {Router} from '@angular/router';
import { Post } from "../shared/post/post";
import {PostService} from '../shared/post/post.service';
import * as Geolocation from "nativescript-geolocation";



@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./post.component.html",
    styleUrls: ['./post.component.css']
   
    
})
export class PostComponent  { 
    
    public post: Post;
    public latitude: number;
    public longitude: number;
    private watchId: number;

    constructor(
        private router:Router, 
        private postService:PostService,
        private zone: NgZone) 
    {
        this.post=new Post();
        this.latitude = 0;
        this.longitude = 0;
    }

    public submit2()
    {
        
        this.publish();
              
    }
    private publish()
    {   
        this.updateLocation();
        this.postService.Publish(this.post)                   
            .subscribe(
                (data) => {   //function()
                    alert(data);
                    this.router.navigate(['/article']);
                    

                    
                },
                () => alert('Unfortunately we were unable to create your publish.')
            );
    }

    private getDeviceLocation(): Promise<any> {
        
        return new Promise((resolve, reject) => {
            Geolocation.enableLocationRequest().then(() => {
                Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }

    public updateLocation() {

        this.getDeviceLocation().then(result => {
            this.latitude = result.latitude;
            this.longitude = result.longitude;
        }, error => {
            console.error(error);
        });
        
    }

    public startWatchingLocation() {
        this.watchId = Geolocation.watchLocation(location => {
            if(location) {
                this.zone.run(() => {
                    this.latitude = location.latitude;
                    this.longitude = location.longitude;
                });
            }
        }, error => {
            alert(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000 });
    }

    public stopWatchingLocation() {
        if(this.watchId) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    }
    

    // onDrawerButtonTap(): void {
    //     const sideDrawer = <RadSideDrawer>Application.getRootView();
    //     sideDrawer.showDrawer();
    // }
}