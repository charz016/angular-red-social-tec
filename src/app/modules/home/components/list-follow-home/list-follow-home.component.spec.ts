import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFollowHomeComponent } from './list-follow-home.component';

describe('ListFollowHomeComponent', () => {
  let component: ListFollowHomeComponent;
  let fixture: ComponentFixture<ListFollowHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFollowHomeComponent]
    });
    fixture = TestBed.createComponent(ListFollowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
