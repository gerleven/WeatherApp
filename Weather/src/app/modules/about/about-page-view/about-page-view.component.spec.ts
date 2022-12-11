import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageViewComponent } from './about-page-view.component';

describe('AboutPageViewComponent', () => {
  let component: AboutPageViewComponent;
  let fixture: ComponentFixture<AboutPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
