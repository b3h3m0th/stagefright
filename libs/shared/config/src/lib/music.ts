/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { IMusic } from './interfaces/music';

import walk from '../../../../../apps/stagefright/src/assets/img/music/walk/walk.png';

export type Musics = IMusic[];

export const musicData: Musics = [
  {
    title: 'Walk',
    type: 'Pre-Release Demo',
    subtitle: '',
    cover: walk,
    releaseDate: new Date(2022, 2, 23),
    link: {
      youtube: 'https://www.youtube.com/watch?v=_JZfrSu1Hb0',
    },
  },
  // {
  //   title: 'Wanted',
  //   subtitle: 'StageFright Debut Album',
  //   type: 'Album',
  //   cover:
  //     'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //   releaseDate: new Date(2021, 11, 31),
  // },
  // {
  //   title: 'Diamond Eyes',
  //   subtitle: 'StageFright Single',
  //   type: 'Single',
  //   cover:
  //     'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //   releaseDate: new Date(2021, 11, 31),
  // },
  // {
  //   title: 'Wanted',
  //   subtitle: 'StageFright Single',
  //   type: 'Single',
  //   cover:
  //     'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //   releaseDate: new Date(2021, 11, 31),
  // },
  // {
  //   title: 'Drive',
  //   subtitle: 'StageFright Single',
  //   type: 'Single',
  //   cover:
  //     'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
  //   releaseDate: new Date(2021, 11, 31),
  // },
];
