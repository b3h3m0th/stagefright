/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { propnameOf } from '@stagefright/shared/util';
import { lazy } from 'react';
import { loading } from '@stagefright/shared/config';

export const pages = {
  home: {
    component: lazy(() => {
      /*eslint-disable-next-line */
      return new Promise((resolve: any) => {
        setTimeout(
          /*eslint-disable-next-line */
          () => resolve(import('@stagefright/home')),
          loading.artificialPageMountDelay
        );
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
  music = 'music',
  band = 'band',
  shop = 'shop',
  shows = 'shows',
  contact = 'contact',
}

export function getSectionId(section: HomeSection): string {
  return section.toLowerCase();
}
