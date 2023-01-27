import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  temas: Array<any> = ["Fungos", "Plantas", "Evolução", "Animais"]
  pagina: number = 1;
  itensPage: number = 4;
  itensInciais: number = 0;
  temasFiltrados: Array<any> =[]
  constructor() { }

  ngOnInit(): void {
    this.proxixmaPag(0);
  }

  proxixmaPag(pag: number): void{
    
  }

  pagAnterior():  void{
    this.pagina = this.pagina - 1;
  }

}
