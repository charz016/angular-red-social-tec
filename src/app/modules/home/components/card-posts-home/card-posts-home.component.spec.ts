import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostsHomeComponent } from './card-posts-home.component';

describe('CardPostsHomeComponent', () => {
  let component: CardPostsHomeComponent;
  let fixture: ComponentFixture<CardPostsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPostsHomeComponent]
    });
    fixture = TestBed.createComponent(CardPostsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
