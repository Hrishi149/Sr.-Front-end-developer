import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

declare var $
@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.scss']
})
export class LoginNavComponent implements OnInit {
  navbarOpen = false;
  selectedItem = null;
 // dropdownVal = 'Vessels';
  constructor() { }
  name: string;
  position: number;
  weight: number;
  symbol: string;
  gender
malecount=0;
femaleCount=0;
   ELEMENT_DATA= [
    {name: 'Hrishikesh', birthDate: "12-12-2020", lang: 'Marathi',gender:'Male'},
    {name: 'Mahesh', birthDate: "10-11-2020", lang: 'Hindi',gender:'Male'},
    {name: 'Ankita', birthDate: "11-12-2020", lang: 'Enlish',gender:'Female'},

  ];
  displayedColumns: string[] = ['name', 'birthDate', 'lang', 'gender'];
  dataSource = this.ELEMENT_DATA;
  rebels = this.dataSource.map( (item)=> {
    if(item.gender == "Male")
    {
      this.malecount ++
    }
    else{
      this.femaleCount ++
    }
  });
  userLenth=this.dataSource.length *10
  toppings = [];

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  valuess
  topping
  ngOnInit() {
 
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  /*getItem(item: any) {
    this.dropdownVal = item.label;
  }*/

}
