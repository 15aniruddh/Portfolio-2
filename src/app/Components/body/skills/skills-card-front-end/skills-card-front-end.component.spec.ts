import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardFrontEndComponent } from './skills-card-front-end.component';

describe('SkillsCardFrontEndComponent', () => {
  let component: SkillsCardFrontEndComponent;
  let fixture: ComponentFixture<SkillsCardFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCardFrontEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCardFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
