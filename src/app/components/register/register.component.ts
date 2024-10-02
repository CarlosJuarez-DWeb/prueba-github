import { Component, OnInit } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {StyleClassModule} from 'primeng/styleclass';
import { FormControl, FormGroup,  Validators } from '@angular/forms';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FloatLabelModule, ButtonModule,  InputTextareaModule,  StyleClassModule],


  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  constructor( ) { 
    
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    
  }
  registerUser(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      // Call your register user function here
      registerUser(userData).toPromise()
        .then((response: any) => {
          console.log(response);
      console.log(userData);
    })
    .catch((error: any) => {
      console.error(error);
      // Handle registration error
    });
      // Replace the console.log with your actual function call
      // registerUserService.registerUser(userData);
    } else {
      console.log('Form is invalid');
    }
    }

}
