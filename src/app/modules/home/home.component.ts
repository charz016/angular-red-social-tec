import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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

  constructor() {}
}
