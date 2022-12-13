import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesListContainerComponent } from './cities-list-container.component';

describe('CitiesListContainerComponent', () => {
  let component: CitiesListContainerComponent;
  let fixture: ComponentFixture<CitiesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
