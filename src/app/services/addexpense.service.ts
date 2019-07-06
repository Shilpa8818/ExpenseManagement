import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddexpenseService {
  expendArray: Array<Custom> = [];
  existingData=[];
  constructor() { }
  postExpense(expenceData:any){
    this.existingData = JSON.parse(localStorage.getItem('expenseData'));
    for(var i=0;i<this.existingData.length;i++){
      this.expendArray.push(this.existingData[i]);
    }
    let customObj = new Custom();
    customObj.categoryName = expenceData.categoryName;
    customObj.itemName = expenceData.itemName;
    customObj.amount = expenceData.amount;
    customObj.dateVal = expenceData.dateVal;
   this.expendArray.push(customObj);
    localStorage.setItem('expenseData',JSON.stringify(this.expendArray));
  }

 ngOnInit() {
 }
}

export class Custom
{
  categoryName:string;
  itemName:string;
  amount:string;
  dateVal:string
}
