import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostsHomeComponent } from './card-posts-home.component';
import { FormsModule } from '@angular/forms';
import { ModalViewFollowsModule } from 'src/app/shared/modals/modal-view-follows/modal-view-follows.module';
import { ModalViewPostsModule } from 'src/app/shared/modals/modal-view-posts/modal-view-posts.module';

@NgModule({
  declarations: [CardPostsHomeComponent],
  imports: [CommonModule, FormsModule, ModalViewPostsModule],
  exports: [CardPostsHomeComponent],
})
export class CardPostsHomeModule {}
