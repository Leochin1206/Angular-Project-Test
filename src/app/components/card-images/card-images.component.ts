import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-images',
  imports: [NgOptimizedImage],
  templateUrl: './card-images.component.html',
  styleUrl: './card-images.component.scss'
})
export class CardImagesComponent {
  @Input("img-local") imgLocal: string = "";
  @Input("title-text") titleText: string = "";
  @Input("desc-text") descText: string = "";
}
