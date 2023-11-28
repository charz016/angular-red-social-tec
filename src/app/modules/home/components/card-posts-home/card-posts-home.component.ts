import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewPostsComponent } from 'src/app/shared/modals/modal-view-posts/modal-view-posts.component';
import { Publication } from 'src/app/shared/models/publication.interface';
import { PublicationService } from 'src/app/shared/services/publications.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'card-posts-home',
  templateUrl: './card-posts-home.component.html',
  styleUrls: ['./card-posts-home.component.scss'],
})
export class CardPostsHomeComponent {
  @Input() post!: Publication;

  com: string = '';

  constructor(
    public modalService: NgbModal,
    private publicationServ: PublicationService,
    private userServ: UserService
  ) {}

  createCom() {
    if (this.com.length == 0) return;
    console.log(this.com);
    this.post.comments.push({
      user: this.userServ.getUser(),
      comment: this.com,
    });
    this.com = '';

    this.publicationServ.updatePublication(this.post);
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

  deletePub() {
    this.publicationServ.deletePublication(this.post).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
