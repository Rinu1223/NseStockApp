import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private dataservice:DataService) { }
  addform=this.fb.group({
    Name:['',Validators.required],
    CurrentMarketPrice:['',Validators.required],
    MarketCap:['',Validators.required],
    StockPE:['',Validators.required],
    DividendYield:['',Validators.required],
    ROCE:['',Validators.required],
    ROEPreviousAnnum:['',Validators.required],
    DebtToEquity:['',Validators.required],
    EPS:['',Validators.required],
    Reserves:['',Validators.required],
    Debt:['',Validators.required],
  })
  ngOnInit(): void {
  }
  createStock(){
    if(this.addform.valid){
      let Name=this.addform.value.Name;
      let CurrentMarketPrice=this.addform.value.CurrentMarketPrice;
      let MarketCap=this.addform.value.MarketCap;
      let StockPE=this.addform.value.StockPE;
      let DividendYield=this.addform.value.DividendYield;
      let ROCE=this.addform.value.ROCE;
      let ROEPreviousAnnum=this.addform.value.ROEPreviousAnnum;
      let DebtToEquity=this.addform.value.DebtToEquity;
      let EPS=this.addform.value.EPS;
      let Reserves=this.addform.value.Reserves;
      let Debt=this.addform.value.Debt;
      let uID=localStorage.getItem("uID")
     this.dataservice.createStock(uID,Name,CurrentMarketPrice,MarketCap,StockPE,DividendYield,ROCE,ROEPreviousAnnum,DebtToEquity,EPS,Reserves,Debt)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        this.router.navigateByUrl('showEvent')
      }
    },
    (result)=>{

    alert(result.error.message)
    })
    }
    else{
      alert("Invalid form")
    }
  }
}
