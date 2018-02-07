import  {Component, OnInit } from '@angular/core';
import {AuthRegisterService, AlertService} from '../../services/auth-register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private  registerService: AuthRegisterService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }


  register() {
    this.loading = true;
    this.registerService.create(this.model)
      .subscribe(
        data => {  console.log(data.success);
                    //let success = JSON.parse(data.toString(),replacer());
                    // var success= datajson.fromJson(success);
          for (let i of data){

            console.log('url is ' + i.success);
          let success = i.success;
            console.log(success);
          }
                if(data.success) {


                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
                } else{
                      this.alertService.error(data.msg);
                }



        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        })    ;
  }

  function replacer(key, value) {
    console.log(typeof value);
    if (key === 'success') {
      return value;
    }
    return value;
  }

}
