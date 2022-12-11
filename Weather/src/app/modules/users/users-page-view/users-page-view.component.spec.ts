import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageViewComponent } from './users-page-view.component';

describe('UsersPageViewComponent', () => {
  let component: UsersPageViewComponent;
  let fixture: ComponentFixture<UsersPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
