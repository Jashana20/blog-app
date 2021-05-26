import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactRef = new FormGroup ({
    firstname: new FormControl(),
    lastname: new FormControl()
  })

  message:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  resetForm() {
    this.message = "";
  }
  
  submitMessage() {
    console.log(this.contactRef.value)
    if(this.contactRef.value.lastname == null){
      this.message = "Please fill out both boxes to submit"
    } else if (this.contactRef.value.firstname == null) {
      this.message = "Please fill out both boxes to submit"
    } else if (this.contactRef.value.lastname == "") {
      this.message = "Please fill out both boxes to submit"
    } else if (this.contactRef.value.firstname == "") {
      this.message = "Please fill out both boxes to submit"
    } else {
      this.message = "Thank you, we will get back to you shortly..."
    }
  }

}
