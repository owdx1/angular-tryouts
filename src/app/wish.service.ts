import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) {
  
  }

  getWishes = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
