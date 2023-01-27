import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './components/profile/profile.component';
import { SpecsProfileComponent } from './components/profile/specs-profile/specs-profile.component';

const routes: Routes = [
  {path: '',  component: SpecsProfileComponent},
  //{path: 'user', loadChildren: () => import('./components/profile/profile.module').then((m) => m.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
