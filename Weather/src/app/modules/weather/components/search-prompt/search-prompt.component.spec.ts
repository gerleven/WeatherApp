import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPromptComponent } from './search-prompt.component';

describe('SearchPromptComponent', () => {
  let component: SearchPromptComponent;
  let fixture: ComponentFixture<SearchPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
