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

  userDetails;


  constructor(private router: Router, private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
       },
      err => {
        console.log(err);
      }
    )

  }


  onLogout() {

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.toastr.success('Logged Out Successfuly!')

    if (localStorage.getItem('token') != null)
      return true;
    else
      this.router.navigate(['/login']);
    return false;

  }

  showContent(){

    if (localStorage.getItem('token') != null)
    localStorage.loggedin

  }

}
