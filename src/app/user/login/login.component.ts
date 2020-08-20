import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './../../shared/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }

  constructor(private service:UserService, private router: Router, private toastr:ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token') != null)
    this.router.navigateByUrl('/home');
  }


  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if(err.status == 400)
        this.toastr.error('Give it Another Try!');
        else
        console.log(err);

      }

    );

  }

}
