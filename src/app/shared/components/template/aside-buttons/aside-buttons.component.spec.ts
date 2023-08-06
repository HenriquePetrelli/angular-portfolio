import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideButtonsComponent } from './aside-buttons.component';

describe('NavbarComponent', () => {
  let component: AsideButtonsComponent;
  let fixture: ComponentFixture<AsideButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideButtonsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AsideButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
