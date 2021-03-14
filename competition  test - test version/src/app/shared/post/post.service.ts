import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Config2 } from '../config';



@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    public Publish(post: Post) {
        return this.http.post(
            Config2.apiUrl,
            JSON.stringify({
                action: "post",
                info: JSON.stringify({
                    name: post.name,
                    description: post.description,
                    ingredient: post.ingredient,
                    price: post.price,
                    latitude:post.latitude,
                    longitude:post.longitude,                   
                    
                })
            }),
           
        );
    }
    public Article() {
        return this.http.post(
            Config2.apiUrl,
            JSON.stringify({
                action: "load",
                info: JSON.stringify({
                   
                    
                })
            }),
           
        );
    }
    public HandleError(e:any):void{
        alert(e.error.error);
        
    }
    // public getData(
    //     ):Observable<any>{
    //     const apiUrl="https://5jnvpazsz8.execute-api.us-east-1.amazonaws.com/default/NAO-savePost"
    //     return this.http.get<any>(apiUrl);
    // }
    
}