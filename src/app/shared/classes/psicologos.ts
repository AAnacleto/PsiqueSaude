import { Especialidade } from '../classes/especialidade';
import { Horarios } from '../classes/horarios';


export class Psicologos{
  id: number;
  nome: string;
  crm: string;
  descricao: string;
  foto: string;
  especialidade: Especialidade;
  horarios: Horarios;
  eventoHora: boolean;
  eventoDescricao: boolean;
  instituicao: string;
}
