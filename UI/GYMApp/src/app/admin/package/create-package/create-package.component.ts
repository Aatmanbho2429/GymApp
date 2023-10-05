import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent {

  constructor(private router:Router) {

  }

  goBack(){
    this.router.navigateByUrl("package-dashboard");
  }
}
