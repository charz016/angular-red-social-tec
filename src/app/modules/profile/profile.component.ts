import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewPostsComponent } from 'src/app/shared/modals/modal-view-posts/modal-view-posts.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  listPost: any[] = [
    {
      img: 'assets/images/posts/post.jpg',
      likes: '1',
      comentarios: ['asda', 'bb'],
      time: 'hace un año',
      text: 'hola!',
    },

    {
      img: 'assets/images/posts/post2.jpg',
      likes: '0',
      comentarios: [],
      time: 'hace un mes',
      text: 'hermoso *W*',
    },

    {
      img: 'assets/images/posts/post3.png',
      likes: '4',
      comentarios: ['asda', 'hola'],
      text: 'buen dia!',
    },

    {
      img: 'assets/images/posts/post4.jpg',
      likes: '2',
      comentarios: ['asda', 'adios'],
      text: '<3',
    },

    {
      img: 'assets/images/posts/post5.jpg',
      likes: '0',
      comentarios: ['asda', 'ccc'],
      text: 'hermoso dia en la ciudad',
    },
  ];

  constructor(public modalService: NgbModal) {}

  viewCom(post: any) {
    const modalRef = this.modalService.open(ModalViewPostsComponent, {
      centered: true,
      size: 'xl',
    });
    modalRef.componentInstance.post = post;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
