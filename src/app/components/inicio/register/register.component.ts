import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup;
  
  constructor(private fb:FormBuilder) { 
    //SI O SI TIENE QUE IR 
    this.register=this.fb.group({
      usuario:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(4)]],
      confirmPassword:['']
    });
  }

  ngOnInit(): void {
  }
  log(){

  }

}
