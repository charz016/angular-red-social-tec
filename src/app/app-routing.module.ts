import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    ...canActivate(() => redirectLoggedInTo(['/home'])),
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: '',
    component: NavBarComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/sign-up'])),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'my-profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'edit-profile',
        loadChildren: () =>
          import('./modules/edit-profile/edit-profile.module').then(
            (m) => m.EditProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
