import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../interfaces/form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
user: User = {
  name: '',
  password: ''
};
constructor(private router:Router) {}

onClick(){
   console.log(this.user); // gives us the result in the console log area 
  if(this.user.name === 'admin' && this.user.password === 'hey'){
    this.router.navigateByUrl('/products')

  }else{
    alert('Invalid credentials');
  }
}

}

