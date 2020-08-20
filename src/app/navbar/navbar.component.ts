import { AuthGuard } from './../auth/auth.guard';
import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authService: any;
  authenticated: any;

  constructor(private router:Router, private service:UserService, private toastr:ToastrService) { }

  ngOnInit() {

  }


  onLogout(){

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.toastr.success('Logged Out Successfuly!')

  }

login(){
  this.authService.login();
  this.authenticated = this.authService.isAuthenticated()

}

}
