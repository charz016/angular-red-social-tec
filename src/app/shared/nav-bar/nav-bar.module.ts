import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { ModalCreatePostModule } from '../modals/modal-create-post/modal-create-post.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalCreatePostModule,
  ],
  exports:[NavBarComponent]
})
export class NavBarModule { }
