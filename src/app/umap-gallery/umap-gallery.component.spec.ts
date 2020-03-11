import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmapGalleryComponent } from './umap-gallery.component';

describe('UmapGalleryComponent', () => {
  let component: UmapGalleryComponent;
  let fixture: ComponentFixture<UmapGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmapGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmapGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
