import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardBackEndComponent } from './skills-card-back-end.component';

describe('SkillsCardBackEndComponent', () => {
  let component: SkillsCardBackEndComponent;
  let fixture: ComponentFixture<SkillsCardBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCardBackEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCardBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
