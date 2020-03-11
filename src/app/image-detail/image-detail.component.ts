import { Component, OnInit } from '@angular/core';
import { ImageLoadService } from "../image-load.service";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(private imageLoadService: ImageLoadService) { }

  ngOnInit(): void {
  }

}
