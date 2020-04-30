import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true;

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem;

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findallPostagens()
  }

  findallPostagens() {
    this.postagemService.getAllPostages().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      location.assign('/feed')
    })
  }

}
