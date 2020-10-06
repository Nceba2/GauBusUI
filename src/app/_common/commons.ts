import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Commons {
    // public apiURL: string = "http://192.168.8.101";
    public apiURL: string = "https://www.madebygiants.co.za";
    
    public event: any;
    public connects: any;
    public notifications: any;
    
    setStorage(data:any){
        if(data || data !==undefined || data !== null)
        window.localStorage['storageData'] = JSON.stringify(data);
    }
    
  checkData(){
    var _storageData = 'undefined';

    try{
      _storageData = JSON.parse(window.localStorage.getItem('storageData'))[0].email;
    }catch(Exception ){
      _storageData = undefined;
    }

    if(_storageData === undefined){
      window.location.href = "/login";
    }
    
    console.log("check results: "+_storageData);
  }
}