import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user=""
  data=""
  filterTerm: string;
 
  constructor(private router:Router,private dataservice:DataService) {
    this.user= localStorage.getItem("name")
    
      let uID=  localStorage.getItem("uID")
        this.dataservice.SearchStock(uID)
         .subscribe((result:any)=>{
           if(result){
             this.data=result.message
           }
          },
          (result)=>{
    alert(result.error.message)
          
         })
      }
   

  ngOnInit(): void {
  }
  createStock(){
    this.router.navigateByUrl('createStock');
  }
 
}