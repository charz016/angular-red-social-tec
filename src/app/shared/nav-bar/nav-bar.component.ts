import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreatePostComponent } from '../modals/modal-create-post/modal-create-post.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { PublicationService } from '../services/publications.service';

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

  constructor(
    public modalService: NgbModal,
    private userServ: UserService,
    private router: Router,
    private publicServ: PublicationService
  ) {}

  ngOnInit() {}

  openModal() {
    const modalRef = this.modalService.open(ModalCreatePostComponent, {
      size: 'md',
    });
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        this.publicServ.addPublication(result).then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  logout() {
    this.userServ
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
