import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedKnowledgeComponent } from './applied-knowledge.component';

describe('AppliedKnowledgeComponent', () => {
  let component: AppliedKnowledgeComponent;
  let fixture: ComponentFixture<AppliedKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
