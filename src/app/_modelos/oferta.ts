import { Empresa } from "./empresa";

export class Oferta {
  id?:number;
  descricao?: string;
  dtInicio?: string;
  dtFim?: string;
  empresa?: Empresa;
  detalhes?: string;
  informacoes?: string;
  url_img?: string;
  destaque: boolean;
}
