import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array:any
  arr:any
  sumArray:any
  totalEarn:any
  averageSale:any
  newOrder:any

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getOrders();
    this.getOrderSummary();
    this.lastDays()
  }

  getOrderSummary(){
    // debugger
    this.empService.getOrderSum().subscribe((item:any)=>{
      console.log(item)
      this.arr = item.data?.overview
      // this.totalEarn = 
      // console.log('total_earnings',this.totalEarn.total_earnings)
      console.log('data',this.arr)
    })
  }

  git remote set-url origin  https://ykaushik177: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@github.com/ykaushik177/WORK.git
  https://ykaushik177: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@github.com/ykaushik177/WORK.git
  
  getOrders(){
    this.empService.getOrderList().subscribe((item:any)=>{
      this.array = item.data;
      console.log(this.array)
      // debugger
    })
  }

  summaryData(){
    this.empService.getOrderSum().subscribe((item:any)=>{
      this.sumArray = item.data['summary']
  })
}
lastData:any
lastArray:any = []
lastDays(){
this.empService.getOrderLast7().subscribe((res:any)=>{
  this.lastData = res.data['last7Days'];
  console.log(this.lastData)
  this.lastArray = [];
  for (const key in this.lastData) {
    this.lastArray.push({date: key, value: this.lastData[key]})
    console.log();
}
console.log(this.lastArray)
})
}


}
