import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { CardImagesComponent } from '../card-images/card-images.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    BtnPrimaryComponent, 
    NewsletterFormComponent, 
    CardImagesComponent
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
