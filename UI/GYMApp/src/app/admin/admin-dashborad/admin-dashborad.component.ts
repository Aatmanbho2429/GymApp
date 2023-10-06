import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/Models/Core/User/user';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-admin-dashborad',
  templateUrl: './admin-dashborad.component.html',
  styleUrls: ['./admin-dashborad.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AdminDashboradComponent implements OnInit{
  users:User[]=[];

  constructor(private router:Router,private confirmationService: ConfirmationService, private messageService: MessageService,private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      (data:User[])=>{
        this.users=data;
      }
    );
  }

  confirmDelete(event: any) {
    var userId=event.target.value;
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.userService.deleteUser(userId).subscribe(
            (data)=>{
              //console.log(data);
              this.userService.getAllUser().subscribe(
                (data:User[])=>{
                  this.users=data;
                }
              );
            }
          );
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'User {{data.name}} Deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
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
