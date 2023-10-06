import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/Core/User/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUser():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:44765/api/user/getAllUsers");
  }

  deleteUser(id:string):Observable<any>{
    return this.httpClient.delete<any>("http://localhost:44765/api/user/"+id);
  }

}
