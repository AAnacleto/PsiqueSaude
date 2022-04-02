import { Endereco } from '../classes/endereco';
import { Psicologos} from '../classes/psicologos';


export class Instituicao{
  codigo: number;
  nome: string;
  endereco: Endereco;
  psicologos: Psicologos;
}
