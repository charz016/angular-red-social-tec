import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-post',
  templateUrl: './modal-create-post.component.html',
  styleUrls: ['./modal-create-post.component.scss'],
})
export class ModalCreatePostComponent {
  selectedFiles?: FileList;
  currentFile?: File;
  preview = '';
  description: any;

  @Input() public user!: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.user);
  }

  selectFile(event: any): void {
    this.preview = '';
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  publish() {
    if (!this.currentFile) return;

    const request = {
      img: this.preview,
      description: this.description,
      likes: [],
      comments: [],
    };
    this.activeModal.close(request);
  }
}
