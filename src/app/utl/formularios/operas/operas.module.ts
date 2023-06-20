import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { OpersBasComponent } from '../opers-bas/opers-bas.component';
import{MatButtonModule} from '@angular/material/button';
import{MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    OpersBasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule, 
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports:[
    OpersBasComponent
  ]
})
export class OperasModule { }
