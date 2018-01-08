import { Component } from "@angular/core";


@Component({
  selector:"pm-root",
  template:`
  <div><b><h1>{{pageTitle}}</h1></b></div>
  <div><b>My First Component</b></div>
  `
})

export class AppComponent{
  pageTitle:string="Acme Product Managment"
}