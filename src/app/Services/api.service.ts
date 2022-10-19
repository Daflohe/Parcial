import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 constructor(public http:HttpClient) {
  }
  url = "https://localhost:7298/api/";

  post(controller:string,obj:object) {
    return this.http.post(this.url+controller,obj).subscribe((res)=>
    console.log(res))
  }

  
}
