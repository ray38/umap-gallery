import { Component } from '@angular/core';
import { ImageLoadService } from './image-load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umap-gallery';
  datasetName: string = 'molecule-core-ref';
  visibleSystems: any[];
  visibleReferences: any[];

  activeSelection: string[];
  listPossibleSelections: string[];

  path:string;
  
  constructor(private imageLoadService: ImageLoadService) {
    // this.visibleImages = this.imageLoadService.getImages();
    this.listPossibleSelections = this.imageLoadService.getPossibleSelections();
    console.log(this.listPossibleSelections);
    this.activeSelection = this.listPossibleSelections.slice(0);
    this.visibleSystems = this.imageLoadService.getAllSystems();
    this.visibleReferences = this.imageLoadService.getAllReferences();
    this.path = this.imageLoadService.getFilePath();
  }

  public onDatasetChange(){
    console.log('changed dataset: ', this.datasetName)
    console.log('possible selections: ', this.listPossibleSelections)
  }

  public checkInArray(selection) {
    // return true;
    return this.activeSelection.includes(selection);
  }

  public toggleSelection(selection) {
    const index = this.activeSelection.indexOf(selection);
    if (index > -1) {
      this.activeSelection.splice(index, 1);
    }
    else {
      this.activeSelection.push(selection);
    }
    console.log(this.activeSelection);
    this.updateSelection();
  }

  public selectAll(){
    this.activeSelection = this.listPossibleSelections;
    this.updateSelection();
  }

  public deselectAll(){
    this.activeSelection = [];
    this.updateSelection();
  }

  public updateSelection(){
    this.visibleSystems = this.imageLoadService.getSystems(this.activeSelection);
    this.visibleReferences = this.imageLoadService.getReferences(this.activeSelection);
    console.log(this.visibleReferences);
  }
}
