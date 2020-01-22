import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddresscomponentComponent } from './addresscomponent/addresscomponent.component';



@NgModule({
  declarations: [AddresscomponentComponent],
  imports: [
    CommonModule
  ],
exports:[
AddresscomponentComponent
]
})
export class ViewModule { }
