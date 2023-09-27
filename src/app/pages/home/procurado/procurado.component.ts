import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-procurado',
  templateUrl: './procurado.component.html',
  styleUrls: ['./procurado.component.css']
})
export class ProcuradoComponent implements OnInit {
  id: string | null = null;
  criminoso: any[] = [];
  closeResult = '';

  constructor (private route: ActivatedRoute, private modalService: NgbModal) {}

  ngOnInit(): void {
    // Capturando o ID da URL
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);  // Deve imprimir "3876" se você acessar a URL fornecida
    this.getCriminoso();
  }

  getCriminoso(){
    this.criminoso = json.filter((v) => v.id == this.id);
    console.log(this.criminoso);
  }


  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}

const json = [
  {
    imagem: "assets/images/20220806_114801.jpg",
  vulgo: "Maitê",
  nome_completo: "Maria Eduarda Dos Santos Penalva",
  id: "3876",
  crimes: [
    "1 - Extorsão Qualificada (Art. 158, § 2o. - CP)",
    "2 - Estelionato Qualificado (Art. 171, § 3o. - CP)",
    "3 - Abuso de Incapaz (Art. 173. - CP)"
  ],
  funcao: "Abuso de incapaz",
  local: "Araguaína - TO",
  dataNascimento: "25/01/2005",
  rg: "Nº (S.S.P.) RG: 1704151",
  naturalidade: "Jacundá - PA",
  situacao: "Procurada",
  historico:
    `Maria Eduarda Dos Santos Penalva, - RG: 1704151 - Data de nascimento:
    25/01/2005
    <br />
    <br />Foragida da Justiça desde 21/09/2023
    <br />Crime: Extorsão Qualificada - Artigo 158, § 2º, do Código Penal.
    <br />Crime: Estelionato Qualificado - Artigo 171, § 3º, do Código Penal.
    <br />Crime: Abuso de Incapaz - Artigo 173 do Código Penal.
    <br />Mandado
    de prisão preventiva expedido pela 2ª Vara da Comarca de Araguaína - TO
    <br />
    <br />Número do Mandado de Prisão: 0027075-54.2013.8.19.0066.0003
    <br />
    <br />Qualquer informação sobre o paradeiro, favor entrar em contato e informar os dados aqui mencionados com a localização
    do suspeito para que possa ser efetuada a sua imediata captura.
    <br />Contamos com a sua colaboração.
    <br />
    <br />Quem tiver qualquer informação a respeito da localização de
    foragidos da Justiça, favor denunciar pelos seguintes canais: Whatsapp
    do Portal dos Procurados (62) 9117-9888. <br />`
  ,
  mandados: {
    origem: "Tribunal de Justiça Comarca de Araguaína",
    processo: "Número do Mandado CNJ: 0027075-54.2013.8.19.0066.01.0005-09",
    expedicao: "Data de expedição: 21/09/2023"
  }
},
{
  imagem: "https://www.procurados.org.br/uploaded/arquivos/10_3_2015__0_fotoin_euro.jpg",
  vulgo: "Euro",
  nome_completo: "Raphael Silva de Oliveira",
  id: "1354",
  crimes: [
    "Tráfico de Drogas",
    "1 - Associação para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06), C/C ART.40, INCISO IV"
  ],
  facção: "TCP - Terceiro Comando Puro",
  funcao: "Segurança do tráfico de drogas",
  local: "Morro da Serrinha - Madureira - RJ",
  dataNascimento: "10/12/1990",
  rg: "RG Nº. (I.F.P.) 213.051.345",
  naturalidade: "Rio de Janeiro - RJ",
  situacao: "Procurada",
  historico:
    `Raphael Silva de Oliveira, o Euro é procurado pelo crime contido no artigo Associação para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06), C/C ART.40, INCISO IV e, faz parte do tráfico de drogas que no Morro da Serrinha, em Madureira, Zona Norte do Rio de Janeiro.
    <br>
    <br>Em outubro de 2014, policiais civis da 29ª DP (Madureira) identificaram os criminosos que circularam armados pela Avenida Ministro Edgar Romero, em Madureira, Zona Norte do Rio, no domingo de eleição. Os bandidos que aparecem nas imagens são Marco Antonio de Oliveira Silva, gerente do tráfico no Morro da Serrinha; e Raphael Silva de Oliveira, o Euro, um dos seguranças de Marco Antonio. Também foram identificados dois criminosos conhecidos como Leco e Japonês ? estes últimos, porém, ainda não têm mandados de prisão pendentes por seu envolvimento com o tráfico.
    <br>
    <br>Segundo policiais militares do 9º BPM (Rocha Miranda), e também de acordo com o relato de testemunhas, houve no dia da eleição um intenso confronto entre traficantes de facções rivais oriundos dos morros da Serrinha e da Congonha, comunidades separadas pela Avenida Ministro Edgar Romero. Moradores contam que foi possível ouvir tiros durante a maior parte do domingo. Por volta das 11h, bandidos da Serrinha desceram pela Rua Lambari em direção à Edgar Romero. Na esquina entre as duas vias, pelo menos quatro criminosos apontaram armas e fizeram ameaças em direção à outra favela.
    <br>
    <br>Pelo Banco Nacional de Mandados de Prisão ? CNJ e Sistema de Cadastramentos de Mandados de prisão ? Polinter ? consta mandado de prisão nº: 13652-41.2012.8.19.0202.0005, expedido pela 2ª Vara Criminal Regional Madureira, datado em: 04/06/2014, com validade até: 29/05/2030; Inquérito Policial nº: 1603/2012, Pedido de Prisão Preventiva.
    <br>
    <br>Pelo Sistema de Identificação Criminal, consta uma anotação pela 29ª DP ? 06/05/2014 ? associação para o tráfico de drogas ? artigo 35 da Lei 11344/06, 2ª Vara Criminal da Regional Madureira.
    <br>`
  ,
  mandados: {
    origem: "Comarca da Capital/2ª Vara Criminal",
    processo: "Número do Mandado CNJ: 13652-41.2012.8.19.0202.0011",
    expedicao: "04/06/2014 - Lei 11343/06"
  }
},
{
  imagem: "https://www.procurados.org.br/uploaded/arquivos/14_1_2022__0_maridao.png",
  vulgo: "Euro",
  nome_completo: "Raphael Silva de Oliveira",
  id: "1354",
  crimes: [
    "1 - Associação Para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06) N/F",
    "Aumento de Pena Por Tráfico Ilícito de Drogas (Art. 40 - Lei 11.343/2006), , IV"
  ],
  facção: "Comando Vermelho - CV",
  funcao: "Gerente do Tráfico de Drogas",
  local: "Favela Parque das Missões - Duque de Caxias",
  dataNascimento: "23/06/1999",
  rg: "- IFP/DETRAN: 27.373.948-2 Emissor: IFP/DETRAN",
  naturalidade: "Duque de Caxias",
  situacao: "Procurada",
  historico:
    `Albert Miguel Rodrigues Soares, o Maridão, de 22 anos, um dos gerentes do tráfico de drogas do Parque das Missões, em Duque de Caxias, na Baixada Fluminense. Ligado a facção Comando Vermelho, , estaria também gerenciando ponto de drogas no Complexo do Alemão, juntamente com o traficante Cristiano Gregório Lucena, o Zé Galinha (atualmente preso).
    <br>
    <br>Contra ele consta um mandado de prisão, expedido pela 2ª Vara Criminal de Duque de Caxias, pelo crime de Associação para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06) N/F Aumento de Pena Por Tráfico Ilícito de Drogas (Art. 40 - Lei 11.343/2006), , IV.
    <br>O Disque Denúncia recebe informações sobre a localização de foragidos da Justiça, nos seguintes canais de atendimento:
    <br>? Zap do Portal dos Procurados: (21) 98849-6099
    <br>? (21) 2253 1177 ou 0300-253-1177
    <br>? APP "Disque Denúncia RJ"
    <br>? Facebook/(inbox): https://www.facebook.com/procuradosrj/,
    <br>? https://twitter.com/PProcurados (mensagens).
    <br>? Site Portal dos Procurados ? em Denuncie ? (procurados.org.br/contato).
    <br>Em todas as plataformas digitais, o Anonimato é Garantido.`
  ,
  mandados: {
    origem: "Número do Mandado CNJ: 0052487-44.2021.8.19.0021.01.0009-18",
    processo: "Comarca de Duque de Caxias Cartório da 2ª Vara Criminal",
    expedicao: "Data de expedição: 30 de novembro de 2021."
  }
},
{
  imagem: "https://www.procurados.org.br/uploaded/arquivos/29_9_2022__6_1.png",
  vulgo: "Nico da Furquim Mendes ou Mister",
  nome_completo: "Adilson Gomes da Hora Júnior",
  id: "4011",
  crimes: [
    "EVADIDO DO SISTEMA PENITENCIÁRIO"
  ],
  facção: "Comando Vermelho - CV -",
  funcao: "Gerente do Tráfico de Drogas",
  local: "Favela Furquim Mendes - Jardim América - RJ",
  dataNascimento: "27/09/1974",
  rg: "0104352570 - RJ",
  naturalidade: "Rio de Janeiro - RJ",
  situacao: "Foragido do Sistema Penitenciário",
  historico:
    `Ele agora usa o apelido de "MISTER", dentro da comunidade da Furquim Mendes.
    <br>
    <br>Adilson Gomes da Hora Júnior, o Nico da Furquim Mendes, de 48 anos, é o chefe do tráfico de drogas da Favela Furquim Mendes, no Jardim América, Zona Norte do Rio, e atualmente se encontra na condição de Evadido do Sistema Penitenciário, por ter empreendido fuga do estabelecimento em que se encontrava recolhido..
    <br>
    <br>Contra ele consta um Mandado de Prisão, expedido pela Vara de Execuções Penais ? VEP ? por Evasão, Mandado de Prisão 900082699-32, expedido em janeiro de 2022. Motivo: Ter empreendido fuga do estabelecimento em que se encontrava
    <br>recolhido.
    <br>
    <br>
    <br>O Disque Denúncia recebe informações sobre a localização de Hugo da Silva, nos seguintes canais de atendimento:
    <br>
    <br>Zap do Portal dos Procurados: (21) 98849-6099
    <br>(21) 2253 1177 ou 0300-253-1177
    <br>APP "Disque Denúncia RJ"
    <br>Facebook/(inbox): https://www.facebook.com/procuradosrj/,
    <br>https://twitter.com/PProcurados (mensagens).
    <br>Site Portal dos Procurados ? em Denuncie ? (procurados.org.br/contato).
    <br>
    <br>Em todas as plataformas digitais, o Anonimato é Garantido.`
  ,
  mandados: {
    origem: "VARA DE EXECUÇÕES PENAIS - PROCESSO ELETRÔNICO - CAPITAL",
    processo: "0432126-89.2007.8.19.0001.01.0004-27",
    expedicao: "Data de expedição:12/01/2022"
  }
},
{
  imagem: "https://www.procurados.org.br/uploaded/arquivos/29_9_2022__1_1.png",
  vulgo: "Professor do Alemão",
  nome_completo: "Fhillip da Silva Gregório",
  id: "4006",
  crimes: [
    "EVADIDO DO SISTEMA PENITENCIÁRIO",
    "1 - 124973-87.2021.8.19.0001 Distribuído em: 07/06/2021 Classe/Assunto: Homicídio Qualificado (Art. 121, § 2º - Cp), III, IV e V N/F Concurso de Pessoas (Arts. 29 a 31 - Cp)"
  ],
  facção: "Comando Vermelho - CV -",
  funcao: "Chefe do Tráfico de Drogas",
  local: "Complexo do Alemão - RJ",
  dataNascimento: "07/09/1987",
  rg: "- RG: 21.688.566-5 Emissor: IFP -",
  naturalidade: "Não Informado - RJ",
  situacao: "Foragido do Sistema Penitenciário",
  historico:
    `Fhillip da Silva Gregório, o Professor do Alemão, de 34 anos, usa como base o Complexo do Alemão. Professor é apontado como o responsável pelo transporte e aquisição de armas, drogas e munição para a quadrilha do Complexo do Alemão. Com contatos no Paraguai, Peru, Bolívia e Colômbia, ele foi preso pela PF em março de 2015. Condenado a 14 anos de prisão, Fhilip deixou a cadeia no dia 23/09/2018, após receber benefício de Visita Periódica ao Lar ? VPL ? quando estava preso no Instituto Penal Edgard Costa, e nunca mais retornou a sua unidade prisional, e é considerado Evadido do Sistema Prisional.
    <br>
    <br>Fhillip foi reconhecido por policiais da UPP Fazendinha, que bateram de frente com um bonde de criminosos na Estrada Adhemar Bebiano no dia 4 de novembro de 2020. Segundo os PMs, Professor participou do intenso confronto com os policiais.
    <br>A quadrilha tem como base a Rua Canitá, dentro do Alemão, e um sitio situado em Seropédica, na Baixada Fluminense. Além disso, Professor tem ramificações em Juiz de Fora, no Estado de Minas Gerais.
    <br>
    <br>Contra ele constam um mandado de prisão, Mandado de Prisão Nº: 0186875-17.2016.8.19.0001.0001, expedido pela VEP ? Vara de Execuções Penais.
    <br>
    <br> Disque Denúncia recebe informações sobre a localização de foragidos da Justiça nos seguintes canais de atendimento:
    <br> Zap do Portal dos Procurados: (21) 98849-6099
    <br>(21) 2253 1177 ou 0300-253-1177
    <br> APP "Disque Denúncia RJ"
    <br> Facebook/(inbox): https://www.facebook.com/procuradosrj/,
    <br> https://twitter.com/PProcurados (mensagens).`
  ,
  mandados: {
    origem: "Tribunal de Justiça Comarca da Capital Cartório da 4ª Vara Criminal",
    processo: "Número do Mandado CNJ: 0124973-87.2021.8.19.0001.01.0004-23",
    expedicao: "Data de expedição: 03/08/2021"
  }
},
{
  imagem: "https://www.procurados.org.br/uploaded/arquivos/6_11_2013__2_fotoin_taco.jpg",
  vulgo: "Taco",
  nome_completo: "Alexandre da Cruz Lima",
  id: "1040",
  crimes: [
    "Tráfico de Drogas",
    `1 - Tráfico de Drogas e Condutas Afins (Art. 33 - Lei 11.343/06) E Associação para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06) C/C Aumento de Pena Por Tráfico Ilícito de Drogas (Art. 40 - Lei 11.343/2006)`,
    `2 - Tráfico de Drogas e Condutas Afins (Art. 33 - Lei 11.343/06) E Associação para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06) N/F Concurso Material (Art. 69 - Cp)`
  ],
  facção: "CV - Comando Vermelho",
  funcao: "Integrante do Tráfico de Drogas",
  local: "Morro do Chapadão - Costa Barros - RJ",
  dataNascimento: "18/09/1981",
  rg: "RG Nº. (I.F.P.) 123.122.277",
  naturalidade: "Município não Informado - RJ",
  situacao: "Procurado",
  historico:
    `Alexandre da Cruz Lima, o Taco é ligado à facção CV - Comando Vermelho e faz parte do tráfico de drogas que no Morro do Chapadão, em Costa Barros, Zona Norte do Rio de Janeiro.
    <br>
    <br>
    <br>Pelo Sistema de Cadastramento de Mandados de Prisão ? Polinter ? constam dois mandados de prisão, expedidos pelas seguintes Varas Criminais: 29ª Vara Criminal da Capital, datado em: 05/04/2013, Lei 11343/06 e 40ª Vara Criminal da Capital, datado em: 26/02/2013 ? Lei 11343/06, pelos crimes de: 1 - Tráfico de Drogas e Condutas Afins (Art. 33 - Lei 11.343/06) E Associação para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06) C/C Aumento de Pena Por Tráfico Ilícito de Drogas (Art. 40 - Lei 11.343/2006)  e 2 - Tráfico de Drogas e Condutas Afins (Art. 33 - Lei 11.343/06) E Associação para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06) N/F Concurso Material (Art. 69 - Cp).
    <br>
    <br>
    <br>Pelo Sistema de Identificação Criminal, consta uma anotação, pela 39ª DP ? 15/08/2008 ? artigo 129, § 9º e/ou § 11 do CP ? arquivado ? Cartório do 1ª Juízo Violência Doméstica.
    <br>
    <br>
    <br>Pelo Sistema de Cadastramento de Ocorrências Policiais, constam três procedimentos: 39ª DP ? 2012 ? Porte Ilegal de Armas de Fogo de Uso Restrito; 39ª DP ? 2012 ? Tráfico de Drogas e 39ª DP ? 2012 ? Associação para o Tráfico de Drogas ? Lei 11343/06.
    <br>
    <br>
    <br>Quem tiver qualquer informação a respeito da localização do acusado ainda em liberdade, favor informar pelos seguintes canais: Whatsapp ou Telegram do Portal dos Procurados (21) 98849-6099; Central de Atendimento do Disque Denúncia (21) 2253-1177; através do Facebook/(inbox), endereço: https://www.facebook.com/procurados.org/; e pelo aplicativo Disque Denúncia RJ. Visite também o Instagram oficial do Portal dos Procurados ? portal.procurados-.`
  ,
  mandados: {
    origem: "29ª Vara Criminal",
    processo: "Processo Nº 0359613-50.2012.8.19.0001/",
    expedicao: "Distribuído em 05/04/2013"
  }
},
{
  imagem: "https://www.procurados.org.br/uploaded/arquivos/1_2_2019__0_Luana-Rosa.png",
  vulgo: "Madrinha da Cidade Alta e Parque Paulista",
  nome_completo: "Luana Rosa de Araujo",
  id: "madrinha-da-cidade-alta-e-imbarie",
  crimes: [
    "1 - Homicídio Qualificado (Art. 121, § 2º - CP), incisos I e IV do CP",
    `2 - Tráfico de Drogas e Condutas Afins (Art. 33 - Lei 11.343/06); Associação Para a Produção e Tráfico e Condutas Afins (Art. 35 - Lei 11.343/06)`
  ],
  facção: "TCP - Terceiro Comando Puro",
  funcao: "Contabilidade do Tráfico de Drogas Cidade e Chefe do Tráfico de Drogas em Imbariê - Duque de Caxias.",
  local: "Favela Cidade Alta - Cordovil - RJ",
  dataNascimento: "01/06/1996",
  rg: "Nº. 27.347.897-4",
  naturalidade: "Duque de Caxias",
  situacao: "Procurado",
  historico:
    `Luana Rosa de Araujo, a Madrinha, é a chefe do tráfico que age no bairro de Imbariê, no município de Duque de Caxias, na Baixada Fluminense e é integrante da Facção Criminosa TCP - Terceiro Comando Puro.
    <br>
    <br>Segundo informações da Polícia Civil, Luana também é ligada ao traficante Peixão, que de acordo com a polícia, a quadrilha de traficantes que atua em Imbariê é ligada ao bando da Cidade Alta.
    <br>
    <br>O conjunto habitacional do programa Minha Casa, Minha Vida na comunidade do Massapé, em Duque de Caxias, na Baixada Fluminense, virou reduto de traficantes. A estimativa é que 20% das casas do condomínio tenham sido tomadas por criminosos, que chegaram a retirar os números dos imóveis para dificultar o cumprimento dos mandados de prisão. Investigações da Polícia Civil apontam que, nessa comunidade, a venda de drogas é comandada por Luana Rosa de Araújo, ela também seria a responsável por expulsar os beneficiários pelo programa e transformar os imóveis em pontos de venda de drogas. De acordo com as investigações, Luana seria o braço direito do traficante Peixão, de quem ganhou um fuzil rosa.
    <br>
    <br>Quem tiver qualquer informação a respeito da localização do acusado ainda em liberdade, favor informar pelos seguintes canais: Whatsapp ou Telegram do Portal dos Procurados (21) 98849-6099; Central de Atendimento do Disque Denúncia (21) 2253-1177; através do Facebook/(inbox), endereço: https://www.facebook.com/procurados.org/; e pelo aplicativo Disque Denúncia RJ. Visite também o Instagram oficial do Portal dos Procurados ? portal.procurados-.`
  ,
  mandados: {
    origem: "Comarca de Duque de Caxias/4ª Vara Criminal",
    processo: "Processo No 17186-12.2016.8.19.0021/Prisão Temporária",
    expedicao: "Distribuído em 18/04/2016"
  }
}
]
