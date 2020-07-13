import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = this.createForm();
  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    const myForm = this.formBuilder.group({
      email: this.formBuilder.group({
        emailAddress: [''],
        repeatEmailAddress: [''],
      }),
      password: this.formBuilder.group({
        password: [''],
        repeatPassword: ['']
      }),
    }
    );
    return myForm;
  }
}
