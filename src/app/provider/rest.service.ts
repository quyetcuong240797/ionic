import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  user: any
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider');
    this.getUser();
  }


  apiUrl = 'http://localhost:3000/users';

  getUser() {
    this.http.get(this.apiUrl).subscribe(
      data => {
        this.user = data
        console.log(this.user);
      }, err => {
        console.log(err)
      }
    );
    return this.user
  }


  postUser(name: string, age: string, email: string) {
    this.http.post(this.apiUrl + "/add", {
      name: name,
      age: age,
      email: email
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  deleteUser(id : number) {
    this.http.delete(this.apiUrl + "/delete/"+""+id).subscribe(
      result => console.log("SUCCCCCCCCCCCCCCCC"+result),
      err => console.error("ERRRRRRRRRRRRRRRRRRRRR"+err)
    );
  }
}
