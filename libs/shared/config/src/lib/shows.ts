import { IShow } from '../../../config/src/lib/interfaces';

export type Shows = IShow[];

export const shows: Shows = [
  {
    location: {
      title: 'Kulturhaus ProKontra',
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
      title: 'Weihnachtsrock Wolfurt',
      address: 'Unterlinden 1, 6922 Wolfurt',
    },
    start: new Date(2021, 11, 11, 21),
    ticket: {
      label: 'Box Office',
    },
  },
  {
    location: {
      title: 'Kulturcafé Schlachthaus (w/ Silius & Discopowerboxxx)',
      address: 'Schlachthausstraße 11, 6850 Dornbirn',
      url: 'https://www.ojad.at/event/antichristmassacre-2/',
    },
    start: new Date(2022, 3, 25, 21),
    ticket: {
      label: 'Box Office',
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
