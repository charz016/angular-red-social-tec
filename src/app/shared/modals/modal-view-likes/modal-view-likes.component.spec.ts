import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewLikesComponent } from './modal-view-likes.component';

describe('ModalViewLikesComponent', () => {
  let component: ModalViewLikesComponent;
  let fixture: ComponentFixture<ModalViewLikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewLikesComponent]
    });
    fixture = TestBed.createComponent(ModalViewLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
