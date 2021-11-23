import { IMusic } from './interfaces/music';

export type Musics = IMusic[];

export const musicData: Musics = [
  {
    title: 'Wanted',
    subtitle: 'StageFright Debut Album',
    type: 'Album',
    cover: './assets/img/music/wanted/stagefright-wanted.jpg',
    releaseDate: new Date(2021, 11, 31),
  },
  {
    title: 'Diamond Eyes',
    subtitle: 'StageFright Single',
    type: 'Single',
    cover: './assets/img/music/diamond_eyes/stagefright-diamond_eyes.jpg',
    releaseDate: new Date(2021, 11, 31),
  },
  {
    title: 'Wanted',
    subtitle: 'StageFright Single',
    type: 'Single',
    cover: './assets/img/music/wanted/stagefright-wanted.jpg',
    releaseDate: new Date(2021, 11, 31),
  },
];
