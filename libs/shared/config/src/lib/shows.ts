import { IShow } from '../../../config/src/lib/interfaces';

export type Shows = IShow[];

export const shows: Shows = [
  {
    location: {
      title: 'Szene Open Air',
      address: '',
    },
    start: new Date(2019, 5, 1, 19),
    ticket: {},
  },
  {
    location: {
      title: 'Kornmarktplatz Bregenz',
      address: 'Kornmarktpl., 6900 Bregenz',
    },
    start: new Date(2019, 5, 22, 19),
    ticket: {},
  },
  {
    location: {
      title: 'Nenzing',
      address: '',
    },
    start: new Date(2019, 8, 27, 20),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Kulturhaus ProKonTra',
      address: 'Kaiser-Franz-Josef-Straße 29, 6845 Hohenems',
      url: 'https://prokontra.at/stagefright/',
    },
    start: new Date(2021, 9, 30, 21),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Kulturcafé Schlachthaus (Postponed!)',
      address: 'Schlachthausstraße 11, 6850 Dornbirn',
      url: 'https://www.ojad.at/event/stagefright/',
    },
    start: new Date(2021, 10, 19, 21),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Antichristmassacre (w/ Silius & Discopowerboxxx)',
      address: 'Schlachthausstraße 11, 6850 Dornbirn',
      url: 'https://www.ojad.at/event/antichristmassacre-2/',
    },
    start: new Date(2022, 2, 25, 21),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Rockhouse Salzburg (w/ Devotion of Mine)',
      address: 'Schallmooser Hauptstraße 46, 5020 Salzburg',
      url: 'https://www.rockhouse.at/Veranstaltungen/RH-Veranstaltung/Local-heroes::322802',
    },
    start: new Date(2022, 3, 1, 19, 30),
    ticket: {
      url: 'https://www.rockhouse.at/Veranstaltungen/RH-Veranstaltung/Local-heroes::322802',
    },
  },
  {
    location: {
      title: 'Dornbirn Marktplatz Open Air',
      address: 'Dornbirn Marktplatz, 6850 Dornbirn',
    },
    start: new Date(2022, 5, 23, 18),
    ticket: {
      label: 'Free',
    },
  },
];

export const upcomingShows: IShow[] = shows.filter(
  (show: IShow) => new Date() < show.start
);

export const previousShows: IShow[] = shows
  .filter((show: IShow) => new Date() >= show.start)
  .sort((a: IShow, b: IShow) => +b.start - +a.start);
