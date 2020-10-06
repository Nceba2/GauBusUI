import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Commons } from'src/app/_common/commons';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private http: HttpClient, private commons: Commons){}

    postAuth(object_: any){
        const body = new HttpParams()
        .set('request','auth')
        .set('objArray',JSON.stringify(object_));

        const url=this.commons.apiURL;
        
        return this.http.post( url, body.toString(),
        {responseType:'text',headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')})
        .pipe(map(data => data));
    }
}