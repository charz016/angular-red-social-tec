import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCreatePostComponent } from './modal-create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalCreatePostComponent],
  imports: [CommonModule,FormsModule],
})
export class ModalCreatePostModule {}
