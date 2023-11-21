import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewPostsComponent } from 'src/app/shared/modals/modal-view-posts/modal-view-posts.component';

@Component({
  selector: 'card-posts-home',
  templateUrl: './card-posts-home.component.html',
  styleUrls: ['./card-posts-home.component.scss'],
})
export class CardPostsHomeComponent {
  @Input() post!: any;

  com: string = '';

  constructor(public modalService: NgbModal) {}

  createCom() {
    if (this.com.length == 0) return;
    console.log(this.com);
    this.post.comentarios.push(this.com);
    this.com = '';
  }

  viewCom() {
    const modalRef = this.modalService.open(ModalViewPostsComponent, {
      centered: true,
      size: 'xl',
    });
    modalRef.componentInstance.post = this.post;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
