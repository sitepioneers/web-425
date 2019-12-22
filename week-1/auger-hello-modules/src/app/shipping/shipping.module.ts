/*
 *  Title:  shipping.module.ts
 *  Author: April Auger
 *  Date:   20 December 2019
 *  Description: A module demonstrating how to create a module in Angular.
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShippingComponent],
  exports: [ShippingComponent]
})
export class ShippingModule { }
