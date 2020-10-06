import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Commons } from'src/app/_common/commons';

@Injectable({
    providedIn: 'root'
})
export class AppService{
    constructor(private http: HttpClient, private commons: Commons){}

    postCall(body){
        const url=this.commons.apiURL+"/roomApi/";
        
        return this.http.post( url, body, { responseType:'text' } ).pipe(map(data => data));
    }
    
    getCall(body){
        const url=this.commons.apiURL+"/roomApi/";
        
        return this.http.get( url, body).pipe(map(data => data));
    }
}