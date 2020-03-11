import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageLoadService } from '../image-load.service';

@Component({
  selector: 'app-umap-gallery',
  templateUrl: './umap-gallery.component.html',
  styleUrls: ['./umap-gallery.component.css']
})
export class UmapGalleryComponent implements OnInit, OnChanges {

  @Input() visibleSystems: any[];
  @Input() path: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // this.visibleImages = this.imageLoadService.getImages();
  }

}
