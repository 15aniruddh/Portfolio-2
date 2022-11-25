import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardOthersComponent } from './skills-card-others.component';

describe('SkillsCardOthersComponent', () => {
  let component: SkillsCardOthersComponent;
  let fixture: ComponentFixture<SkillsCardOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCardOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCardOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
