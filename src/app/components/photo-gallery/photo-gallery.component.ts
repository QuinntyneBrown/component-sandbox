import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./photo-gallery.component.html"),
    styles: [require("./photo-gallery.component.scss")],
    selector: "photo-gallery",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryComponent implements OnInit { 
    ngOnInit() {

    }
}
