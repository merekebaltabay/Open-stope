import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  }); 

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.createForm();
}
  createForm() {
    this.contactForm = this.formBuilder.group({
      firstName: '',
      lastName: ''
    });
  }
  ngOnInit(): void {
  }

}
