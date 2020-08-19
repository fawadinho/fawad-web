import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }


  onSubmit(){
    this.service.register().subscribe(
      (res:any) =>{
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('Created Successfuly!')

        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username not available ')
                break;

                default:
                  this.toastr.error(element.description, 'Signup Failed')

                break;
            }
          })
        }
      },
      err => {
        console.log(err);

      }
    );
  }

}
