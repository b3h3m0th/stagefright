import { IShow } from '../../../config/src/lib/interfaces';

export type Shows = IShow[];

export const shows: Shows = [
  {
    location: {
      title: 'Conrad Sohm',
      address: 'Boden 1, Dornbirn',
    },
    start: new Date(2019, 4, 3, 19),
    ticket: {},
  },
  {
    location: {
      title: 'Szene Open Air',
      address: 'Lustenau',
    },
    start: new Date(2019, 5, 1, 19),
    ticket: {},
  },
  {
    location: {
      title: 'Kornmarktplatz Bregenz',
      address: 'Kornmarktpl., Bregenz',
    },
    start: new Date(2019, 5, 22, 19),
    ticket: {},
  },
  {
    location: {
      title: 'JOIN, Nenzing',
      address: 'Eugen-Getzner-Straße 7, Nenzing',
    },
    start: new Date(2019, 8, 27, 20),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Kulturhaus ProKonTra',
      address: 'Kaiser-Franz-Josef-Straße 29, Hohenems',
      url: new URL('https://prokontra.at/stagefright/'),
    },
    start: new Date(2021, 9, 30, 21),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Kulturcafé Schlachthaus (Postponed!)',
      address: 'Schlachthausstraße 11, Dornbirn',
      url: new URL('https://www.ojad.at/event/stagefright/'),
    },
    start: new Date(2021, 10, 19, 21),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Antichristmassacre (w/ Silius & Discopowerboxxx)',
      address: 'Schlachthausstraße 11, Dornbirn',
      url: new URL('https://www.ojad.at/event/antichristmassacre-2/'),
    },
    start: new Date(2022, 2, 25, 21),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Rockhouse Salzburg (w/ Devotion of Mine)',
      address: 'Schallmooser Hauptstraße 46, Salzburg',
      url: new URL(
        'https://www.rockhouse.at/Veranstaltungen/RH-Veranstaltung/Local-heroes::322802'
      ),
    },
    start: new Date(2022, 3, 1, 19, 30),
    ticket: {
      url: new URL(
        'https://www.rockhouse.at/Veranstaltungen/RH-Veranstaltung/Local-heroes::322802'
      ),
    },
  },
  {
    location: {
      title: 'Freudenhaus Lustenau',
      address: 'Dornbirner Str., Lustenau',
      url: new URL('https://freudenhaus.or.at/programm/2022/play-for-ukraine/'),
    },
    start: new Date(2022, 4, 7, 18),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Schlachthaus (w/ Casiopeia & Contrail)',
      address: 'Schlachthausstraße 11, Dornbirn',
      url: new URL(
        'https://www.ojad.at/event/benefizkonzert_rock_hard_4_life/'
      ),
    },
    start: new Date(2022, 4, 28, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Dornbirn Marktplatz Open Air (cancelled)',
      address: 'Marktplatz Dornbirn',
    },
    start: new Date(2022, 5, 23, 18),
    ticket: {
      label: 'Free',
    },
  },
  {
    location: {
      title: 'Soundcheck Open Air',
      address: 'Thüringen',
    },
    start: new Date(2022, 7, 6, 18),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Geronimos Motorcycle',
      address: 'Nenzing',
    },
    start: new Date(2022, 8, 10, 20),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Metbar Lenzburg (w/ Sin Starlett)',
      address: 'Lenzburg (CH)',
      url: new URL('https://www.metbar.ch/'),
    },
    start: new Date(2022, 10, 26, 21),
    ticket: {
      label: 'Tickets',
      url: new URL(
        'https://eventfrog.ch/de/p/konzert/hard-rock-heavy-metal/sin-starlett-stage-fright-live-6985188026046351312.html'
      ),
    },
  },
  {
    location: {
      title: 'Schlachthaus (w/ Dreaming of Tomorrow)',
      address: 'Schlachthausstraße 11, Dornbirn',
      url: new URL('https://www.ojad.at/event'),
    },
    start: new Date(2022, 11, 3, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Camäleon (w/ Dr. Dipshit & Unbekannte Täterschaft)',
      address: 'Fabrikweg, 9490 Vaduz (FL)',
      url: new URL('https://camaleon.li'),
    },
    start: new Date(2023, 1, 25, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Bar&Pub Festival w/ Fate of Faith',
      address: 'Reflex, Buchs (FL)',
      url: new URL('http://www.reflex-bar.ch/'),
    },
    start: new Date(2023, 2, 4, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Baragga Fäscht Festival',
      address: 'Simon Frick-Strasse, 9466 Sennwald (CH)',
      url: new URL('https://www.baragga-faescht.com/'),
    },
    start: new Date(2023, 4, 13, 20),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Bruch Brothers (w/ Mirkwood Spiders)',
      address: 'Baselstrasse 7, 6003 Luzern (CH)',
      url: new URL('https://www.bruch-brothers.ch/'),
    },
    start: new Date(2023, 4, 20, 20),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Planken Rockt Openair',
      address: 'Eschen (CH)',
      url: new URL('http://www.reflex-bar.ch/'),
    },
    start: new Date(2023, 5, 24, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Palazzo',
      address: 'Chur (CH)',
      url: new URL(
        'https://www.local.ch/de/d/chur/7000/bowlingcenter/palazzo-suedostschweiz-ag-iO0KOt0NBV177R6181mtEA'
      ),
    },
    start: new Date(2023, 6, 8, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Stage am Bach',
      address: 'Mels (CH)',
      url: new URL('https://stageambach.ch/'),
    },
    start: new Date(2023, 9, 7, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Dä 3. Stock',
      address: 'Herisau (CH)',
      url: new URL('https://www.xn--d3stock-5wa.ch/'),
    },
    start: new Date(2023, 10, 18, 21),
    ticket: {
      label: '',
    },
  },
];

export const upcomingShows: IShow[] = shows
  .filter((show: IShow) => new Date() < show.start)
  .sort((a: IShow, b: IShow) => +a.start - +b.start);

export const previousShows: IShow[] = shows
  .filter((show: IShow) => new Date() >= show.start)
  .sort((a: IShow, b: IShow) => +b.start - +a.start);
