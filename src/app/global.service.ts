import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  arrJur = [];
  constructor() {
    
  }
  public pushDataJur(data1){
    this.arrJur.push(data1);
  }
  public getDataJur(){
    return this.arrJur;
  }
  public setDataJur(dataArray){
    this.arrJur = dataArray;
  }
}