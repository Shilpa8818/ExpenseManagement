import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  existingData:any;
  page = 1;
  pageSize = 4;
  collectionSize=0;
  totalBudget=80000;
  percentageUsages:any;
  total:number=0;

  
  constructor(private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.existingData = JSON.parse(localStorage.getItem('expenseData'));
    this.collectionSize=this.existingData.length;
    for(var a=0;a<this.existingData.length;a++){
      this.total+=parseInt(this.existingData[a].amount);

    }
    this.percentageUsages=(this.total/this.totalBudget)*100;
  }
  
  public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
  public pieChartData:number[] = [40, 20, 20 , 10,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  addNewExpense(){
    this.router.navigateByUrl('/addexpense');
  }
  get countries(): any{
    return this.existingData
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
