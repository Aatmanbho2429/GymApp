import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-dashboard',
  templateUrl: './package-dashboard.component.html',
  styleUrls: ['./package-dashboard.component.scss']
})
export class PackageDashboardComponent {

  constructor(private router:Router) {

  }

  goBack(){
    this.router.navigateByUrl("admin-dashboard");
  }

  toCreatePackage(){
    this.router.navigateByUrl("create-package");
  }

  toEditPackage(){
    this.router.navigateByUrl("edit-package");
  }

}
