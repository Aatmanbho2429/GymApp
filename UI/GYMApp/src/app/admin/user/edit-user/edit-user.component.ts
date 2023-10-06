import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/Models/Core/Package/package';
import { Pt } from 'src/app/Models/Core/Pt/pt';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  package:Package=new Package();
  packages:Package[]=[];

  Pt:Pt=new Pt();
  Pts:Pt[]=[];

  constructor(private router:Router) {

  }

  ngOnInit(): void {
    this.packages=[
      {id:"1",name:"Bronze",price:500,duration:6},
      {id:"2",name:"Silver",price:600,duration:7},
      {id:"3",name:"Gold",price:700,duration:8}
    ]
    this.Pts=[
      {id:"1",name:"Aatman"},
      {id:"2",name:"Man"},
      {id:"3",name:"AB"}
    ]
  }


  goBack(){
    this.router.navigateByUrl("admin-dashboard");
  }
}
