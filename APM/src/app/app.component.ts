import { Component } from "@angular/core";
import { ProductService } from "./products/productService";

@Component({
selector:'am-root',
template:
`
<div><h1>{{pageTitle}}</h1></div>
<pm-products></pm-products>
`,
providers:[ProductService]
})
export class AppComponent{
  pageTitle:string="Acme Product Management"
}