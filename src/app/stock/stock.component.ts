import { Component, OnInit } from '@angular/core';
import { Stock, StockService} from "../shared/stock.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stocks:Stock[];
  constructor(public stockService:StockService) {
  }

  ngOnInit() {
    this.stocks=this.stockService.getStock()
  }

}
