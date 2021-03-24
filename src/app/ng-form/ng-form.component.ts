import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {

  formField = {
    name : "",
    address : "",
    phone : "",
    city : "",
    age : 0
    // {name: ""},
    // {address:  ""},
    // {phone: ""},
    // {city:  ""},
    // {age: 0}
  }

  cities = [
    { name: "Sao Paulo", state: "SP"},
    { name: "Porto Alegre", state: "RS"},
    { name: "Curitiba", state: "PR"},
    { name: "Rio de Janeiro", state: "RJ"}
  ]

  showClientList: boolean = false;
  btnlisttitle = "Show List"

  clients = [];


  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.clients.push({
      name: this.formField.name,
      address: this.formField.address,
      city: this.formField.city,
      age: this.formField.age,
      phone: this.formField.phone
    });
    console.log(this.clients);
  }

  cancel(){

    Object.entries(this.formField).forEach(([key, value])=>{
      key == "age" ? this.formField["age"] = 0 : this.formField[key] = "";
    })

    console.log(this.formField);
  }

  listClients(){
      if(this.showClientList == true){
        this.showClientList = false;
        this.btnlisttitle = "Show List" ;
      }
      else{
        this.showClientList = true;
        this.btnlisttitle = "Hide List" ;
      }
  }
}
