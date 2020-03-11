import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceGalleryComponent } from './reference-gallery.component';

describe('ReferenceGalleryComponent', () => {
  let component: ReferenceGalleryComponent;
  let fixture: ComponentFixture<ReferenceGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
