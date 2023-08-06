import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHoverComponent } from './gallery-hover.component';

describe('GalleryHoverComponent', () => {
  let component: GalleryHoverComponent;
  let fixture: ComponentFixture<GalleryHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
