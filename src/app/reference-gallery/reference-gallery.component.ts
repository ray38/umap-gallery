import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-reference-gallery',
  templateUrl: './reference-gallery.component.html',
  styleUrls: ['./reference-gallery.component.css']
})
export class ReferenceGalleryComponent implements OnInit {

  @Input() visibleReferences: any[];
  @Input() path: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // this.visibleImages = this.imageLoadService.getImages();
  }

}
