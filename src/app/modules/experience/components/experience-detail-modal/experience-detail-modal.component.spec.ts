import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailModalComponent } from './experience-detail-modal.component';

describe('ExperienceDetailModalComponent', () => {
  let component: ExperienceDetailModalComponent;
  let fixture: ComponentFixture<ExperienceDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
