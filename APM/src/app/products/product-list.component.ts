import { Component } from "@angular/core";
import{IProduct} from "./product"
import { OnInit } from "@angular/core";
import { ProductService } from "./productService";
import { error } from "util";
@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']

})

export class ProductListComponent implements OnInit {
     pageTitle:string="Product List!";
     imageWidth:number=50;
     imageMargin:number=2;
     showImage:boolean=false;
    //  listFilter:string;
    errorMessage:string;
    
     _listFilter:string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
    }



     filteredProducts:IProduct[];
     products:IProduct[]=[];
    constructor(private _productList:ProductService){

    }
        performFilter(filterBy:string):IProduct[]
        {
            filterBy=filterBy.toLocaleLowerCase();
            return this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
        }
        toggleImage():void{
            this.showImage=!this.showImage;
        }
        ngOnInit():void{
            this._productList.getProducts()
            .subscribe(products=>{
                this.products=products;
                this.filteredProducts=this.products;
            },
            error=>this.errorMessage=<any>error
            );
            
        }

        onRatingClicked(message:string){
            this.pageTitle='Product List'+message;
        }
}