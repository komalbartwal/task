import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createUser(user: any){
    return this._http.post("http://localhost:3000/submit",user);
  }
  storeUser(){
    return this._http.get("http://localhost:3000/submit");
  }

  deletUser(allusers: any){
    return this._http.delete("http://localhost:3000/submit/"+allusers.id);
  }
  update(allusers: any){
    return this._http.put("http://localhost:3000/submit/"+allusers.id, allusers);
  }

  createTitle(title:any){
    return this._http.post("http://localhost:3000/title",title);
  }
  storeTitle(){
    return this._http.get("http://localhost:3000/title");
  }
  deletTitle(t:any){
    return this._http.delete("http://localhost:3000/title/"+t.id);
  }
  ok(t:any){
    return this._http.put("http://localhost:3000/title/"+t.id,t);
  }
}
