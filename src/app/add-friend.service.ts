import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private http : HttpClient;

  public addFriend (friend : Friend){}

  constructor(http) {this.http = http}
}

//In the service, make a method called addFriend and give it a parameter, typehint it to be of the Friend type.
// You'll also need to import Friend.
