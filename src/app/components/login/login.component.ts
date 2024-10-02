import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FloatLabelModule,ButtonModule,InputTextareaModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
