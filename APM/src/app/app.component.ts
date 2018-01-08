import { Component } from "@angular/core";

@Component({
selector:'am-root',
template:
`
<div><h1>{{pageTitle}}</h1></div>
<pm-products></pm-products>
`
})
export class AppComponent{
  pageTitle:string="Acme Product Management"
}