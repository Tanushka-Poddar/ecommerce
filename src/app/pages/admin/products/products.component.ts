import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProductService } from '../../../services/products/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  newPanelVisible: boolean = false;
  productObj: any = {    
  "productId": 0,
  "productSku": " ",
  "productName": " ",
  "productPrice": 0,
  "productShortName": " ",
  "productDescription": " ",
  "createdDate": new Date(),
  "deliveryTimeSpan": " ",
  "categoryId": 0,
  "productImageUrl": " ",
  "userId": 0
}

constructor (private productSrv : ProductService ) {}

  onClickNew(){
    this.newPanelVisible = true;
  }
  
  onClickClose(){
    this.newPanelVisible = false;
  }

}
