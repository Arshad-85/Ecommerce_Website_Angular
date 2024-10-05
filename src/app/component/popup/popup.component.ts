import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, NgLabelTemplateDirective,
    NgOptionTemplateDirective,FormsModule,
    NgSelectComponent,],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  
  @Input() item:any;

  selectedImage:any;

  ngOnChanges(){

  this.selectedImage = this.item.images[0];
  }
}
