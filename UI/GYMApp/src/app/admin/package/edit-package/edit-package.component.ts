import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.scss']
})
export class EditPackageComponent {
  constructor(private router:Router) {

  }

  goBack(){
    this.router.navigateByUrl("package-dashboard");
  }
}
