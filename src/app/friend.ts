//import {Component, OnChanges, OnInit} from "@angular/core";

export class Friend /*implements OnInit, OnChanges*/ {

   FirstName : string;
   LastName : string;
   email : string;
   PhoneNumber : string;
   Language : string;

  constructor(FirstName: string, LastName: string, email: string, PhoneNumber: string, Language: string) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.email = email;
    this.PhoneNumber = PhoneNumber;
    this.Language = Language;
}

  /*ngOnInit() {
    this.checkRequiredFields(this.FirstName);
    this.checkRequiredFields(this.LastName);
    this.checkRequiredFields(this.email);
    this.checkRequiredFields(this.PhoneNumber);
    this.checkRequiredFields(this.Language);
  }

  ngOnChanges(changes) {
    this.checkRequiredFields(this.FirstName);
    this.checkRequiredFields(this.LastName);
    this.checkRequiredFields(this.email);
    this.checkRequiredFields(this.PhoneNumber);
    this.checkRequiredFields(this.Language);
  }

  checkRequiredFields(input) {
    if(input === null) {
      throw new Error("Missing Field");

    }
  }*/
}

