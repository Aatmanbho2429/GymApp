import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashborad',
  templateUrl: './admin-dashborad.component.html',
  styleUrls: ['./admin-dashborad.component.scss']
})
export class AdminDashboradComponent {
  constructor(private router:Router) {

  }

  toPackageDashboard(){
    this.router.navigateByUrl("package-dashboard");
  }

  toCreateUser(){
    this.router.navigateByUrl("create-user");
  }

  toEditUser(){
    this.router.navigateByUrl("edit-user");
  }

}
