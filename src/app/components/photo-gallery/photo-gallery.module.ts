import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PhotoGalleryComponent } from './photo-gallery.component';

const declarables = [PhotoGalleryComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class PhotoGalleryModule { }
