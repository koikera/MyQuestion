import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  fases: number = 1
  perguntas: Array<number> =  [];
  rangeFase: string = '0%';
  fase1: string = 'btn-primary';
  fase2: string = 'btn-secondary';
  fase3: string = 'btn-secondary';

  constructor(
    public modalService: NgbActiveModal,
    public ngbModal: NgbModal
    ) { }

  ngOnInit(): void {
    this.initPergunta();
  }

  closeModal(): void{
    this.modalService.close('Modal Closed')
  }

  nextFase(): void{
    this.fases = this.fases + 1;
    if(this.fases == 2){
      this.fase2 = 'btn-primary';
      this.rangeFase = '50%';
    }
    else if(this.fases == 3 ){
      this.fase3 = 'btn-primary';
      this.rangeFase = '100%';
    }
  }

  voltarFase(): void{
    this.fases = this.fases - 1;
    if(this.fases == 1){
      this.fase1 = 'btn-primary';
      this.fase2 = 'btn-secondary';
      this.fase3 = 'btn-secondary';
      this.rangeFase = '0%';
    }
    else if(this.fases == 2 ){
      this.fase2 = 'btn-primary';
      this.fase3 = 'btn-secondary';
      this.rangeFase = '50%';
    }
  }

  initPergunta(): void{
    this.perguntas = Array(10).fill(0).map((x,i)=>i+1);
  }

  addPergunta(): void{
    this.perguntas.push(this.perguntas.length + 1);
  }

}
