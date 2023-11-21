import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreatePostComponent } from '../modals/modal-create-post/modal-create-post.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public user = {
    name: 'Izzat Nadiri',
    age: 26,
  };

  constructor(public modalService: NgbModal) {}

  ngOnInit() {}

  openModal() {
    const modalRef = this.modalService.open(ModalCreatePostComponent, {
      size: 'md',
    });
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
