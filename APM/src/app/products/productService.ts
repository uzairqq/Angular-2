import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

Injectable()
export class ProductService{
    private productUrl='./api/products/products.json';

constructor(private _http:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this.productUrl);
    }
}