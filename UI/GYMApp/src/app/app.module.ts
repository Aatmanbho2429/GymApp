import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboradComponent } from './admin/admin-dashborad/admin-dashborad.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PackageDashboardComponent } from './admin/package/package-dashboard/package-dashboard.component';
import { CreatePackageComponent } from './admin/package/create-package/create-package.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditPackageComponent } from './admin/package/edit-package/edit-package.component';
import { CreateUserComponent } from './admin/user/create-user/create-user.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { DialogModule } from 'primeng/dialog';
import { AnimateModule } from 'primeng/animate';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboradComponent,
    PackageDashboardComponent,
    CreatePackageComponent,
    EditPackageComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    RadioButtonModule,
    DialogModule,
    AnimateModule,
    ConfirmPopupModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
