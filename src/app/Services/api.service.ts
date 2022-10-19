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
 async getAll(controller: string) {
    var DataResponse: any;
    await this.http.get(this.url + controller).toPromise().then((res) => {
      DataResponse = res;
    })
    return DataResponse;
  }
  
}
