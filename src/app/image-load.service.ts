import { Injectable } from '@angular/core';
import directory from '../assets/directory.json';
import moleculeCoreRefConfig from '../assets/molecule-core-ref/molecule-core-ref-config.json';

@Injectable({
  providedIn: 'root'
})
export class ImageLoadService {
  datasetName: string = 'molecule-core-ref';
  dataset:any = moleculeCoreRefConfig;


  changeDataset(datasetName){
    this.datasetName = datasetName;
    switch (this.datasetName) {
      case 'molecule-core-ref':
        this.dataset = moleculeCoreRefConfig;
        break;
    
      default:
        this.dataset = moleculeCoreRefConfig;
        break;
    }
  }

  getFilePath(){
    return this.dataset.path;
  }

  getAllSystems(): any[]{
    let result = [];
    let p = this.dataset.systems;
    for (let system in p) {
      if (p.hasOwnProperty(system)) {
        let temp = {"id": system, "tags": p[system].tags, "references": p[system].references, "file": p[system].file}
        result.push(temp);
      }
    }
    return result;
  }

  

  getAllReferences(): any[] {
    let result = [];
    let p = this.dataset.references;
    for (let system in p) {
      if (p.hasOwnProperty(system)) {
        let temp = {"id": "ref_" + system, "name": system, "file": p[system]}
        result.push(temp);
      }
    }
    return result;
  }

  getSystems(activeSelection: string[]): any[]{
    let result = [];
    let p = this.dataset.systems;
    for (let system in p) {
      if (p.hasOwnProperty(system)) {
        if (activeSelection.some(r=> p[system].tags.indexOf(r) >= 0)) {
          let temp = {"id": system, "tags": p[system].tags, "references": p[system].references, "file": p[system].file}
          result.push(temp);
        }
      }
    }
    return result;
  }

  getReferences(activeSelection: string[]): any[]{
    let listOfReferences = this.getListOfReferences(activeSelection);
    let result = [];
    let p = this.dataset.references;
    listOfReferences.forEach(system => {
      if (p.hasOwnProperty(system)) {
        let temp = {"id": "ref_" + system, "name": system, "file": p[system]}
        result.push(temp);
      }
    });
    return result;
  }

  getListOfReferences(activeSelection: string[]): string[]{
    let result = [];
    let p = this.dataset.systems;
    for (let system in p) {
      if (p.hasOwnProperty(system)) {
        if (activeSelection.some(r=> p[system].tags.indexOf(r) >= 0)) {
          result = [...result, ...p[system].references];
        }
      }
    }
    let unique = [...new Set(result)]; 
    return unique.sort();
  }


  getPossibleSelections(): string[] {
    let p = this.dataset.systems;
    let result = [];
    for (let system in p) {
      if (p.hasOwnProperty(system)) {
        result = [...result, ...p[system].tags];
      }
    }
    console.log(result)
    let unique = [...new Set(result)]; 
    return unique.sort();
  }
  //constructor() { }
}
