import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public valoresOptions = [
    "Envolvidos na Morte de Agentes de Segurança",
    "Envolvidos na Morte de Agentes de Segurança,Evadidos no Sistema Penitenciário",
    "Envolvidos na Morte de Agentes de Segurança,Roubos em Geral",
    "Evadidos no Sistema Penitenciário",
    "Evadidos no Sistema Penitenciário,",
    "Evadidos no Sistema Penitenciário,Roubos em Geral",
    "Homicídio/Latrocínio",
    "Homicídio/Latrocínio,",
    "Homicídio/Latrocínio,Envolvidos na Morte de Agentes de Segurança",
    "Homicídio/Latrocínio,Envolvidos na Morte de Agentes de Segurança,Evadidos no Sistema Penitenciário",
    "Homicídio/Latrocínio,Envolvidos na Morte de Agentes de Segurança,Roubos em Geral",
    "Homicídio/Latrocínio,Evadidos no Sistema Penitenciário",
    "Homicídio/Latrocínio,Roubos em Geral",
    "Homicídio/Latrocínio,Roubos em Geral,",
    "Roubos em Geral",
    "Roubos em Geral,"
  ];

}
