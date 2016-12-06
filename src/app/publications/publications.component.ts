import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ole-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publications = [
    {
      journal
          :
          "Kognition og Pædagogik, temanummer efterår",
      link
          :
          "http://www.maini.me/olearticles/",
      title
          :
          "Mening og betydning i fællesskaber – et dramatisk arbejde.",
      year
          :
          "2015"
    },
    {

      journal
          :
          "Pædagogisk Psykologisk Tidskrift nr. 1. ",
      link
          :
          "http://www.maini.me/olearticles/EnBoerneUngeraadgivningogPPRjustintime.pdf",
      title
          :
          "En Børne- og ungerådgivning og PPR – ”just in time”.",
      year
          :
          "2015"
    },
    {

      journal
          :
          "Nordiske Udkast, nr. 1,",
      link
          :
          "http://www.maini.me/olearticles/",
      title
          :
          "Liv i organisationer, affekt og intuition. Om Spinozas filosofi.",
      year
          :
          "2013"
    },
    {

      journal
          :
          "Pædagogisk psykologisk tidsskrift, Årg. 47, nr. 6",
      link
          :
          "http://www.maini.me/olearticles/PPRtvaerfagligtarbejdeogjazzenspejlingafpraksis.pdf",
      title
          :
          "PPR, tværfagligt arbejde og jazz – en spejling af praksis.",
      year
          :
          "(2010)"
    },
    {

      journal
          :
          "Pædagogisk psykologisk tidsskrift, Årg. 46, nr. 3",
      link
          :
          "http://www.maini.me/olearticles/Justintimehvordanovergådiagnoserneogskabevidenpåstedet.pdf",
      title
          :
          "\"Just in time\": hvordan overgå diagnoserne og skabe viden på stedet.",
      year :
          "(2009)"
    },
    {

      journal
          :
          "Relationer i skolen perspektiver på liv og læring. Redigeret af Tom Ritchie, Billesø & Baltzer",
      link
          :
          "http://www.maini.me/olearticles/",
      title
          :
          "Læring og vanskeligheder i én skole - flere verdener.",
      year
          :
          "2006"
    },
    {

      journal
          :
          "Relationer i Psykologien. Redigeret af Tom Ritchie, Billesøe & Baltzer",
      link
          :
          "http://www.maini.me/olearticles/",
      title
          :
          "Væren i forhold: Relationer i kritisk psykologisk perspektiv",
      year
          :
          "2007"
    },
    {

      journal
          :
          "Psykologisk pædagogisk rådgivning, Årg. 44, nr. 5/6",
      link
          :
          "http://www.maini.me/olearticles/LedelseafPPRibevægelseledelseafvidenipraksis.pdf",
      title
          :
          "Ledelse af PPR i bevægelse: ledelse af viden i praksis",
      year
          :
          "(2007)"
    },
    {

      journal
          :
          "Psyke & logos, Årg. 27, nr. 2",
      link
          :
          "http://www.maini.me/olearticles/Bevaegelsetaenkningogorganisationiprofessioneltarbejde.pdf",
      title
          :
          "Bevægelse, tænkning og organisation i professionelt arbejde",
      year
          :
          "(2006)"
    },
    {

      journal
          :
          "Psykologisk pædagogisk rådgivning, Årg. 42, nr. 5/6",
      link
          :
          "http://www.maini.me/olearticles/Projektkategoriogintuitionompsykologiskvidenipraksis.pdf",
      title
          :
          "Projekt, kategori og intuition - om psykologisk viden i praksis",
      year
          :
          "(2005)"
    },
    {

      journal
          :
          "Psykologisk pædagogisk rådgivning, Årg. 41, nr. 5/6",
      link
          :
          "http://www.maini.me/olearticles/",
      title
          :
          "Psykologiske kategorier i inklusiv praksis",
      year
          :
          "(2004)"
    },
    {

      journal
          :
          "Nordiske udkast, Årg. 31, nr. 1",
      link
          :
          "http://www.maini.me/olearticles/",
      title
          :
          "Viden i praksis: om forskning som praksisudviklingsforskning",
      year
          :
          "(2003)"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
