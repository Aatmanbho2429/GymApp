import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  packages:string[]=[];

  constructor(private router:Router) {

  }


  goBack(){
    this.router.navigateByUrl("admin-dashboard");
  }
}
