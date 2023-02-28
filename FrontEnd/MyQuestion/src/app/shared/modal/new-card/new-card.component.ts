import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoPergunta } from 'src/app/models/enumarators';
import { Perguntas } from 'src/app/models/perguntas';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  fases: number = 1
  perguntas: Array<any> =  [];
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
    this.visu();
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

  visu(){
    console.log(this.perguntas);
  }

  initPergunta(): void{
    this.perguntas = Array(10).fill(0).map((x,i)=>{
      var newQuestion: Partial<Perguntas> = {}
      newQuestion.id = i + 1;
      newQuestion.tipo = TipoPergunta.Dissertativa;
      return newQuestion;
  });
  }

  addPergunta(): void{
    var ultimaPergunta = this.perguntas[this.perguntas.length - 1]

    if(ultimaPergunta.id !== 20){
      var newQuestion: Partial<Perguntas> = {}
      newQuestion.id = ultimaPergunta.id + 1;
      newQuestion.tipo = TipoPergunta.Dissertativa;
      this.perguntas.push(newQuestion);
      console.log(this.perguntas)

    } else {
      console.error("Limite de 20 perguntas")
    }
    
  }

  changeTypeQuestion(id: number): void{
    var editar = this.perguntas.find(x => x.id == id);

    editar.tipo = editar.tipo == 0 ? 1 : 0 || editar.tipo == 1 ? 0 : 1
    console.log(this.perguntas)

  }
}
