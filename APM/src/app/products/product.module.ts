import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

import { StarComponent } from '../shared/star-component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';
import { ProductService } from './productService';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',
      canActivate:[ProductGuardService],
      component:ProductDetailsComponent}
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  providers:[
    ProductService,
    ProductGuardService
    
  ]
})
export class ProductModule { }
