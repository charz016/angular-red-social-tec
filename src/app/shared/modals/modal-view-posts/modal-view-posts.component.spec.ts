import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewPostsComponent } from './modal-view-posts.component';

describe('ModalViewPostsComponent', () => {
  let component: ModalViewPostsComponent;
  let fixture: ComponentFixture<ModalViewPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewPostsComponent]
    });
    fixture = TestBed.createComponent(ModalViewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
