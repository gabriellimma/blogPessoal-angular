import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  getAllPostages() {
    return this.http.get('htt´://31.220.57.14:8080/postagens');
  }
}
