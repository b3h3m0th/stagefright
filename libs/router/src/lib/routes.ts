import { propnameOf } from '@stagefright/shared/util';
import { lazy } from 'react';

export const pages = {
  home: {
    component: lazy(() => import('@stagefright/home')),
  },
} as const;

export const homeSections = {
  default: '',
  music: 'music',
  band: 'band',
  shows: 'shows',
  contact: 'contact',
};

/**
 * @key Route name
 * @value URL route
 */
export type ROUTES = {
  [K in keyof typeof pages]: K extends 'home' ? `` : `${K}`;
};
export const ROUTES: ROUTES = Object.keys(pages).reduce(
  (acc, curr) =>
    curr === propnameOf<typeof pages>(pages, (p) => p.home)
      ? { ...acc, [curr]: `` }
      : { ...acc, [curr]: `${curr}` },
  {}
) as ROUTES;

export type HOMESECTIONS = {
  [K in keyof typeof pages]: K extends 'home' ? `` : `#${K}`;
};
export const HOMESECTIONS: HOMESECTIONS = Object.keys(pages).reduce(
  (acc, curr) =>
    curr === propnameOf<typeof pages>(pages, (p) => p.home)
      ? { ...acc, [curr]: `` }
      : { ...acc, [curr]: `#${curr}` },
  {}
) as HOMESECTIONS;
