import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url="http://localhost:3000/user"
dogUrl="https://dog.ceo/api/breeds/image/random"
  constructor(private http:HttpClient) { }
  poststudent(data)
  {
    return this.http.post(this.url,data)
   
  }
  getstudent()
  {
    return this.http.get<any>(this.url)
    
  }
  updatestudent(id,data)
  {
    return this.http.put("http://localhost:3000/user/"+id,data)
  }
  deletestudent(id)
  {


    return this.http.delete(`${this.url}/${id}`)
  }

  getdog()
  {
    return this.http.get(this.dogUrl)
  }
}
