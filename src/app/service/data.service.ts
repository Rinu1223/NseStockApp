import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options={
    withCredentials: true
  }
  constructor(private http:HttpClient) { }
  login(Username:any,password:any){
    const data={
      Username:Username,
      password:password
    }
    return this.http.post('http://localhost:3000/login',data)
  }
  
  createStock(uID:any,Name:any,CurrentMarketPrice:any,MarketCap:any,StockPE:any,DividendYield:any,ROCE:any,ROEPreviousAnnum:any,DebtToEquity:any,EPS:any,Reserves:any,Debt:any){
    const data={
      uID:uID,
      Name:Name,
      CurrentMarketPrice:CurrentMarketPrice,
      MarketCap:MarketCap,
      StockPE:StockPE,
      DividendYield:DividendYield,
      ROCE:ROCE,
      ROEPreviousAnnum:ROEPreviousAnnum,
      DebtToEquity:DebtToEquity,
      EPS:EPS,
      Reserves:Reserves,
      Debt:Debt



    }
    return this.http.post('http://localhost:3000/createStock',data,this.options)
  }
  SearchStock(uID:any){
    const data={
      uID:uID
    }
    return this.http.post('http://localhost:3000/SearchStock',data,this.options)
  }
}
