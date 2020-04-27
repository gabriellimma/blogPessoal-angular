import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem[]

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findallPostagens()
  }

  findallPostagens() {
    this.postagemService.getAllPostages().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

}
