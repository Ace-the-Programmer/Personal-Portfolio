import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  project1Image: string | ArrayBuffer | null = null;
  project2Image: string | ArrayBuffer | null = null;
  project3Image: string | ArrayBuffer | null = null;

  constructor() {}

  onImageSelect(event: any, project: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (project === 'project1') this.project1Image = reader.result;
        if (project === 'project2') this.project2Image = reader.result;
        if (project === 'project3') this.project3Image = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
