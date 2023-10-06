import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-package-dashboard',
  templateUrl: './package-dashboard.component.html',
  styleUrls: ['./package-dashboard.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class PackageDashboardComponent {

  constructor(private router:Router,private confirmationService: ConfirmationService, private messageService: MessageService) {

  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Package Deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
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
