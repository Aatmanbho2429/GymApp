import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboradComponent } from './admin/admin-dashborad/admin-dashborad.component';
import { PackageDashboardComponent } from './admin/package/package-dashboard/package-dashboard.component';
import { CreatePackageComponent } from './admin/package/create-package/create-package.component';
import { EditPackageComponent } from './admin/package/edit-package/edit-package.component';
import { CreateUserComponent } from './admin/user/create-user/create-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';

const routes: Routes = [
  {path:"admin-dashboard",component:AdminDashboradComponent},
  {path:"package-dashboard",component:PackageDashboardComponent},
  {path:"create-package",component:CreatePackageComponent},
  {path:"edit-package",component:EditPackageComponent},
  {path:"create-user",component:CreateUserComponent},
  {path:"edit-user",component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
