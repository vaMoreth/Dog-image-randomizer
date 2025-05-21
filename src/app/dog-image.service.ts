import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogImageService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getRandomDogImage(): Observable<string> {
    return this.http.get<{ message: string; status: string }>(this.apiUrl)
      .pipe(map(response => response.message));
  }
}