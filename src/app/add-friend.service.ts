import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private http : HttpClient;
  private url : string = 'http://localhost:9000/';

  public addFriend (friend : Friend){

    return this.http.post(this.url + 'addFriend', friend)
  }

  constructor(http : HttpClient) {this.http = http}
}

//In the service, make a method called addFriend and give it a parameter, typehint it to be of the Friend type.
// You'll also need to import Friend.
