import { propnameOf } from '@stagefright/shared/util';
import { lazy } from 'react';

export const pages = {
  home: {
    component: lazy(() => {
      /*eslint-disable-next-line */
      return new Promise((resolve: any) => {
        /*eslint-disable-next-line */
        setTimeout(() => resolve(import('@stagefright/home')), 1000);
      });
    }),
  },
} as const;

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

export enum HomeSection {
  default = '',
  music = 'Music',
  band = 'Band',
  shows = 'Shows',
  contact = 'Contact',
}
