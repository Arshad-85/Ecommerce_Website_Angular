import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BodyComponent,CommonModule],
  templateUrl:'./header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public CartProductArray:any = [];
  public Count:number = 0;
  public checkoutAmount:number = 0;

  AddProduct(item:any){
    if(!this.CartProductArray.includes(item)){
      item.SelectQuantity = 1
      item.TotalPrice = item.price
      this.CartProductArray.push(item);
      this.Count++
      this.checkout();
    }else{
      alert("Product Already Added")
    }
  }

  RemoveProduct(index:number){
    this.checkoutAmount -= this.CartProductArray[index].TotalPrice

    if(index != -1){
      this.CartProductArray.splice(index, 1)
      this.Count --
      this.checkout();
    }
  }
  
  Plus(item:any){
      item.SelectQuantity++
      item.TotalPrice = item.TotalPrice + item.price
      this.checkoutAmount += item.price
      this.checkout();
  }

  Minus(item:any){
    if(item.SelectQuantity > 1){
      item.SelectQuantity--
      item.TotalPrice = item.TotalPrice - item.price
      this.checkoutAmount -= item.price
      this.checkout();
    }
  }

  checkout(){
    this.checkoutAmount = 0;
    this.CartProductArray.forEach((e:any) => {
      this.checkoutAmount =this.checkoutAmount + e.TotalPrice
    });
  }

}
