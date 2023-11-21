import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalViewPostsComponent } from './modal-view-posts.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalViewPostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ModalViewPostsModule { }
