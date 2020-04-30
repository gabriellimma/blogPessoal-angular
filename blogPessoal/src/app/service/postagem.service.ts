import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) { }

  // CRUD - Create (post), read (get), Update (put), Delete (delete)

  getAllPostages() {
    return this.http.get('http://31.220.57.14:8080/postagens');
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://31.220.57.14:8080/postagens', postagem)
  }
}
