import { IShow } from './interfaces';

export type Shows = IShow[];

export const shows: Shows = [
  {
    location: {
      title: 'Kulturhaus ProKontra',
      address: 'Kaiser-Franz-Josef-Straße 29, 6845 Hohenems',
      url: 'https://prokontra.at/stagefright/',
    },
    start: new Date(2021, 9, 30, 21),
    ticketUrl: '',
  },
  {
    location: {
      title: 'Kulturcafé Schlachthaus',
      address: 'Schlachthausstraße 11, 6850 Dornbirn',
      url: 'https://www.ojad.at/event/stagefright/',
    },
    start: new Date(2021, 10, 19, 21),
    ticketUrl: '',
  },
];
