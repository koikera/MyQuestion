import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCardComponent } from 'src/app/shared/modal/new-card/new-card.component';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  temas: Array<any> = ["Fungos", "Plantas", "Evolução", "Animais"]
  constructor(
    public modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const modal = this.modalService.open(NewCardComponent, {
      size: 'lg'
    });
    modal.result.then();
  }

  proxixmaPag(pag: number): void{
    
  }

  pagAnterior():  void{
  }

}
