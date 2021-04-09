import { Component, OnInit } from "@angular/core";
import { Artigo } from "../models/artigo.model";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  public artigos: Artigo[];

  constructor() {}

  ngOnInit(): void {
    this.artigos = [
      {
        titulo: "5 dicas para sua carreira profissional",
        descricao:
          "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
      },
      {
        titulo: "5 dicas para sua carreira profissional",
        descricao:
          "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
      },
      {
        titulo: "5 dicas para sua carreira profissional",
        descricao:
          "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
      }
    ];
  }
}
