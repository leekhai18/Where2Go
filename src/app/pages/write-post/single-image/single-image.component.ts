import { Component, OnInit } from '@angular/core';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'ngx-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.scss']
})
export class SingleImageComponent implements OnInit {
  profileImage: ImageSnippet;

  constructor() { }

  ngOnInit() {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.profileImage = new ImageSnippet(event.target.result, file);
      console.log(this.profileImage.src);
    });

    reader.readAsDataURL(file);
  }
}
