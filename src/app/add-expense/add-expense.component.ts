import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { AddexpenseService } from '../services/addexpense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  submitted = false;
  expenseObj:any;
  loading=false;
  model;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    private addexpense: AddexpenseService
  ) { }
  ngOnInit() {
   const a= JSON.parse(localStorage.getItem('expenseData'));
    this.expenseForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      itemName: ['', Validators.required],
      amount: ['', Validators.required],
      dateVal: ['', Validators.required]
    })
  }

  get f() { return this.expenseForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.expenseForm.invalid) {
        return;
    }

    this.loading = true;
    var categoryName=this.expenseForm.value.categoryName;
    var itemName=this.expenseForm.value.itemName;
    var amount=this.expenseForm.value.amount;
    var dateVal=this.expenseForm.value.dateVal;
  
    var dateString=dateVal.year+'-'+dateVal.month+'-'+dateVal.day;
    this.expenseObj={
      'categoryName':categoryName,
      'itemName':itemName,
      'amount':amount,
      'dateVal':dateString
    };
    this.addexpense.postExpense(this.expenseObj);
    this.router.navigateByUrl('/home');
  }

}
