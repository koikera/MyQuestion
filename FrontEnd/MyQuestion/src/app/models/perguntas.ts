import { TipoPergunta } from "./enumarators";

export interface Perguntas {
    id: number,
    tipo: TipoPergunta,
    pergunta: string,
    resposta: string
}
