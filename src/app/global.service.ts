import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  countArrNJ = 0;
  countArrDJ = 0;
  arrNamaJur = [];
  arrDetailJur = [];
  constructor() {
    
   }
  public pushDataNamaJur(data1){
    this.arrNamaJur.push(data1);
    this.countArrNJ += 1;
  }
  public pushDataDetailJur(data1){
    this.arrDetailJur.push(data1);
    this.countArrDJ += 1;
  }
  public getDataNamaJur(){
    return this.arrNamaJur;
  }

  public getDataDetailJur(){
    return this.arrDetailJur;
  }
  public setDataNamaJur(dataArray){
    this.arrNamaJur = dataArray;
  }
  public setDataDetailJur(dataArray){
    this.arrDetailJur = dataArray;
  }
}