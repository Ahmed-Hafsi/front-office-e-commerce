import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../model/contactus';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactus: ContactUs;

  constructor() { }

  ngOnInit(): void {
    this.contactus= new ContactUs();
  }
  

}
