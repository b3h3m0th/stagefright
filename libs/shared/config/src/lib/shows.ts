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
    },
    start: new Date(2022, 4, 28, 21),
    ticket: {
      label: '',
    },
  },
  {
    location: {
      title: 'Dornbirn Marktplatz Open Air',
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
];

export const upcomingShows: IShow[] = shows
  .filter((show: IShow) => new Date() < show.start)
  .sort((a: IShow, b: IShow) => +a.start - +b.start);

export const previousShows: IShow[] = shows
  .filter((show: IShow) => new Date() >= show.start)
  .sort((a: IShow, b: IShow) => +b.start - +a.start);
