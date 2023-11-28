import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../models/publication.interface';
import { PublicationService } from '../../services/publications.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal-view-posts',
  templateUrl: './modal-view-posts.component.html',
  styleUrls: ['./modal-view-posts.component.scss'],
})
export class ModalViewPostsComponent implements OnInit {
  @Input() public post!: Publication;

  com: string = '';

  constructor(
    private publicationServ: PublicationService,
    private userServ: UserService
  ) {
    console.log(this.post);
  }
  ngOnInit(): void {
    console.log(this.post);
  }

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
}
