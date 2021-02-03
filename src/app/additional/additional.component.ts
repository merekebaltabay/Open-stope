import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {
  shareForm = new FormGroup({
    mine: new FormControl(),
    location: new FormControl(),
    method: new FormControl(),
    Qvalue: new FormControl(),
    factorA: new FormControl(),
    factorB: new FormControl(),
    factorC: new FormControl(),
    factorF: new FormControl(),
    factorT: new FormControl(),
    hr: new FormControl()
  });
  
  public method: string;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }
   selectChangeHandler (event: any) {
    this.method = event.target.value;
  }
   createForm() {
    this.shareForm = this.formBuilder.group({
      mine:'', 
      location:'',
      method: '', 
      Qvalue: Number,
      factorA: Number, 
      factorB: Number, 
      factorC: Number, 
      factorF: Number, 
      factorT: Number, 
      hr: Number 

    });
  }
  ngOnInit(): void {
  }

}
