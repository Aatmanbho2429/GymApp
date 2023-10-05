import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit{
  packages:string[]=[];

  constructor(private router:Router) {

  }

  ngOnInit(): void {
    
  }

  goBack(){
    this.router.navigateByUrl("admin-dashboard");
  }
}
