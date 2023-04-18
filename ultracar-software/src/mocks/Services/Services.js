import geometriaVeicular from "../../assets/geometria-veicular.webp";
import trocaDeOleo from "../../assets/troca-de-oleo.webp";
import pneus from "../../assets/pneus.webp";
import suspensao from "../../assets/suspensao.webp";
import revisoes from "../../assets/revisoes.webp";
import injecao from "../../assets/injecao.webp";

export const services = [
  {
    id: 1,
    type: "Geometria veicular",
    imgSrc: geometriaVeicular,
    description:
      "Alinhamento, Balancemento, Cambagem , Caster,  Atraso de roda.",
  },
  {
    id: 2,
    type: "Troca de óleo Transmissão Automática",
    imgSrc: trocaDeOleo,
    description: "Utilização das melhores tecnologias e produtos.",
  },
  {
    id: 3,
    type: "Venda de Pneus e Rodas",
    imgSrc: pneus,
    description: "Somos importadores de rodas de liga leve.",
  },
  {
    id: 4,
    type: "Suspensão",
    imgSrc: suspensao,
    description: "Avalie sua suspensão gratuitamente.",
  },
  {
    id: 5,
    type: "Revisões",
    imgSrc: revisoes,
    description: "Confira nossos pacotes de revisão.",
  },
  {
    id: 6,
    type: "Injeção eletrônica",
    imgSrc: injecao,
    description: "Diagnóstico com equipamentos de alta tecnologia.",
  },
];
