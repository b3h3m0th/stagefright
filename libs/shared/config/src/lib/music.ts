/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { IMusic } from './interfaces/music';

import {
  walkCover,
  diamondEyesCover,
  wantedCover,
  driveCover,
} from '@stagefright/shared/assets';

export type Musics = IMusic[];

export const musicData: Musics = [
  {
    title: 'Wanted',
    subtitle: 'Debut Album',
    type: 'Album',
    cover: wantedCover,
    releaseDate: new Date(2022, 7, 5),
    link: {
      spotify:
        'https://open.spotify.com/album/5RYd4cKJTyKO6dGJigPCHC?si=dYKjRiMRTYyykd-mf_VWVQ',
    },
  },
  {
    title: 'Walk',
    type: 'Single',
    subtitle: '',
    cover: walkCover,
    releaseDate: new Date(2022, 6, 30),
    link: {
      spotify:
        'https://open.spotify.com/album/1uTKi9uT8CMAIhcXiSniuB?si=WeTxAkg6QsuBfKEVWJ2zGw',
      youtube: 'https://www.youtube.com/watch?v=_JZfrSu1Hb0',
    },
  },
  {
    title: 'Diamond Eyes',
    subtitle: 'Single',
    type: 'Single',
    cover: diamondEyesCover,
    releaseDate: new Date(2022, 11, 31),
  },
  {
    title: 'Drive',
    subtitle: 'Single',
    type: 'Single',
    cover: driveCover,
    releaseDate: new Date(2022, 6, 16),
    link: {
      spotify:
        'https://open.spotify.com/album/2ZZzI4sbFRbu7h9BUL0MuM?si=NR-rQU0ETzWn8PiIFnQndg',
    },
  },
];
