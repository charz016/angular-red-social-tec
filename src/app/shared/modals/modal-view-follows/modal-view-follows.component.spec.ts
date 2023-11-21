import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewFollowsComponent } from './modal-view-follows.component';

describe('ModalViewFollowsComponent', () => {
  let component: ModalViewFollowsComponent;
  let fixture: ComponentFixture<ModalViewFollowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewFollowsComponent]
    });
    fixture = TestBed.createComponent(ModalViewFollowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
