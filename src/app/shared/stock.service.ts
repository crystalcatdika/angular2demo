import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
// 表示该服务可以注入其他的服务
export class StockService {

  constructor(public logger:LoggerService) { }

  private  stocks:Stock[]= [
    new Stock(1,"第一只羊"),
    new Stock(2,"第二只羊"),
    new Stock(3,"第三只羊"),
    new Stock(4,"第四只羊"),
    new Stock(5,"第五只羊"),
    new Stock(6,"第六只羊"),
    new Stock(7,"第七只羊"),
    new Stock(8,"第八只羊")
  ];

  getStock():Stock[]{
    // this.logger.log("注入loggger服务 打印日志")
    return this.stocks;
  }

}


export class Stock{
  constructor(
    public id:number,
    public name:string
  ){}
}
