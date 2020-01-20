import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const formules = [
      {
        id: '1',
        date_depart: '2020-06-11 22:00:00',
        date_retour: '2020-06-23 22:00:00',
        prix_ht: '359',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '1',
          region: 'Guadeloupe',
          description: 'Dans un site exceptionnel,en bordure d\'un petit lagon turquoise, tout est r\u00e9uni pour un s\u00e9jour paradisiaque. D\u00e9couvrez les merveilles de grande terre et de basse terre, les joies des plong\u00e9es dans la r\u00e9serve naturelle Cousteau.',
          deleted: '1',
          images: ['guadeloupe_1.jpg'],
        },
        promotion: null
      }, {
        id: '2',
        date_depart: '2020-07-31 22:00:00',
        date_retour: '2020-08-14 22:00:00',
        prix_ht: '1450',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '1',
          region: 'Guadeloupe',
          description: 'Dans un site exceptionnel,en bordure d\'un petit lagon turquoise, tout est r\u00e9uni pour un s\u00e9jour paradisiaque. D\u00e9couvrez les merveilles de grande terre et de basse terre, les joies des plong\u00e9es dans la r\u00e9serve naturelle Cousteau.',
          deleted: '1',
          images: ['guadeloupe_1.jpg'],
        },
        promotion: null
      }, {
        id: '3',
        date_depart: '2020-09-02 22:00:00',
        date_retour: '2020-09-14 22:00:00',
        prix_ht: '1420',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '1',
          region: 'Guadeloupe',
          description: 'Dans un site exceptionnel,en bordure d\'un petit lagon turquoise, tout est r\u00e9uni pour un s\u00e9jour paradisiaque. D\u00e9couvrez les merveilles de grande terre et de basse terre, les joies des plong\u00e9es dans la r\u00e9serve naturelle Cousteau.',
          deleted: '1',
          images: ['guadeloupe_1.jpg'],
        },
        promotion: null
      }, {
        id: '4',
        date_depart: '2020-06-03 00:00:00',
        date_retour: '2020-06-15 00:00:00',
        prix_ht: '1250',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '2',
          region: 'Saint-Barth\u00e9l\u00e9my',
          description: 'Imaginez une \u00eele o\u00f9 il fait 26 \u00e0 28 \u00b0C toute l\'ann\u00e9e. Baignez vous dans une eau turquoise.',
          deleted: '1',
          images: ['saint-barth_1.jpg', 'saint-barth_2.jpg'],
        },
        promotion: null
      }, {
        id: '5',
        date_depart: '2020-07-08 00:00:00',
        date_retour: '2020-07-18 00:00:00',
        prix_ht: '1300',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '2',
          region: 'Saint-Barth\u00e9l\u00e9my',
          description: 'Imaginez une \u00eele o\u00f9 il fait 26 \u00e0 28 \u00b0C toute l\'ann\u00e9e. Baignez vous dans une eau turquoise.',
          deleted: '1',
          images: ['saint-barth_1.jpg', 'saint-barth_2.jpg'],
        },
        promotion: null
      }, {
        id: '6',
        date_depart: '2020-07-02 00:00:00',
        date_retour: '2020-07-15 00:00:00',
        prix_ht: '1700',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '3',
          region: 'Birmanie',
          description: 'La Birmanie est un pays passionnant pour tous ceux qui s\u2019int\u00e9ressent \u00e0 l\'art, aux civilisations, \u00e0 l\'hindouisme. Ce pays s\'ouvre et a conserv\u00e9 toute la richesse de son patrimoine culturel. Visitez les temples, les march\u00e9s, ...',
          deleted: '1',
          images: ['birmanie_1.jpg', 'birmanie_2.jpg', 'birmanie_3.jpg'],
        },
        promotion: null
      }, {
        id: '7',
        date_depart: '2020-11-12 00:00:00',
        date_retour: '2020-11-25 00:00:00',
        prix_ht: '1890',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '3',
          region: 'Birmanie',
          description: 'La Birmanie est un pays passionnant pour tous ceux qui s\u2019int\u00e9ressent \u00e0 l\'art, aux civilisations, \u00e0 l\'hindouisme. Ce pays s\'ouvre et a conserv\u00e9 toute la richesse de son patrimoine culturel. Visitez les temples, les march\u00e9s, ...',
          deleted: '1',
          images: ['birmanie_1.jpg', 'birmanie_2.jpg', 'birmanie_3.jpg'],
        },
        promotion: null
      }, {
        id: '8',
        date_depart: '2019-12-27 00:00:00',
        date_retour: '2020-01-10 00:00:00',
        prix_ht: '2200',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '4',
          region: 'Canada',
          description: 'D\u00e9couvrez la nature g\u00e9n\u00e9reuse et les grandes villes du Canada en toute saison, gr\u00e2ce aux nombreux circuits que nous avons \u00e9labor\u00e9s.',
          deleted: '1',
          images: ['canada_1.jpg', 'canada_2.jpg'],
        },
        promotion: null
      }, {
        id: '9',
        date_depart: '2021-03-02 23:00:00',
        date_retour: '2021-03-12 23:00:00',
        prix_ht: '1000',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '1',
          region: 'Guadeloupe',
          description: 'Dans un site exceptionnel,en bordure d\'un petit lagon turquoise, tout est r\u00e9uni pour un s\u00e9jour paradisiaque. D\u00e9couvrez les merveilles de grande terre et de basse terre, les joies des plong\u00e9es dans la r\u00e9serve naturelle Cousteau.',
          deleted: '1',
          images: ['guadeloupe_1.jpg'],
        },
        promotion: null
      }, {
        id: '11',
        date_depart: '2020-03-02 23:00:00',
        date_retour: '2020-03-12 23:00:00',
        prix_ht: '1000',
        deleted: '0',
        nb_places: '10',
        destination: {
          id: '6',
          region: 'Bretagne',
          description: 'Tr\u00e8s belle r\u00e9gion, mer et campagne. Pays de l\u00e9gendes et des menhirs\r\n\t\r\n\t\r\n\t',
          deleted: '0'
        },
        promotion: null
      }
    ];

    const voyageurs = [{
      id: '2',
      civilite: 'M',
      nom: 'M',
      prenom: 'mm',
      date_naissance: '2000-01-01'
  }]

    return { formules, voyageurs };
  }
}
