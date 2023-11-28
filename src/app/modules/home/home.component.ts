import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/shared/models/publication.interface';
import { PublicationService } from 'src/app/shared/services/publications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listPost: Publication[] = [];

  constructor(private publicationServ: PublicationService) {}
  ngOnInit(): void {
    this.publicationServ.getPublication().subscribe(
      (response) => {
        this.listPost = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
