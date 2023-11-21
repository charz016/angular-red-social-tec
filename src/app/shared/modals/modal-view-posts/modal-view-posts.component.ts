import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-view-posts',
  templateUrl: './modal-view-posts.component.html',
  styleUrls: ['./modal-view-posts.component.scss']
})
export class ModalViewPostsComponent implements OnInit{
  @Input() public post!: any;

  com: string = '';


  constructor(){
    console.log(this.post);
    
  }
  ngOnInit(): void {
    console.log(this.post);
  }

  
  createCom() {
    if (this.com.length == 0) return;
    console.log(this.com);
    this.post.comentarios.push(this.com);
    this.com = '';
  }

}
