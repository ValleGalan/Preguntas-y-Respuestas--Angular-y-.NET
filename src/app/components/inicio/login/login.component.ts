import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {
  login:FormGroup;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,
              private router:Router) { 
    this.login=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required],
    })
  }
 
  log():void{
    console.log(this.login);

    const usuario: Usuario={
      nombreUsuario:this.login.value.usuario,
      password:this.login.value.password
    }
    if(usuario.nombreUsuario ==='flor' && usuario.password==='123'){
      this.router.navigate(['/dashboard']);
    }else{
      this.toastr.error('usuario o contraseña incorrecto','error');
    }

    console.log(usuario); //imprime valor de la clase
  }
  ngOnInit(): void {
  }

}
