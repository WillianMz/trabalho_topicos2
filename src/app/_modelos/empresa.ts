import { Categoria } from "./categoria";

export class Empresa {
  id?: number;
  nome?: string;
  fantasia?: string;
  sobre?: string;
  horario?: string;
  endereco?: string;
  cidadeId?: number;
  cidadeNome?:string;
  telefone?: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;

  url_logo?: string;
  url_capa?:string;

  categoria: Categoria;
  // categoriaId?: number;
  // categoriaNome?: string;

  //horario
  dom?: string;
  seg?: string;
  ter?: string;
  qua?: string;
  qui?: string;
  sex?: string;
  sab?: string;

  destaque: boolean;
}
