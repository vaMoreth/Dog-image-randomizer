import { Component } from '@angular/core';
import { DogImageService } from './dog-image.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatCardModule]
})

export class AppComponent {
  dogImageUrl: string = '';

  constructor(private dogImageService: DogImageService) {
    this.loadRandomDogImage();
  }

  loadRandomDogImage(): void {
    this.dogImageService.getRandomDogImage().subscribe(url => {
      this.dogImageUrl = url;
    });
  }
}