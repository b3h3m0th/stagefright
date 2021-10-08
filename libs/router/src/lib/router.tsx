import { lazy } from 'react';
import './router.module.scss';
import { propnameOf } from '@stagefright/shared/util';

const pages = {
  home: {
    component: lazy(() => import('@stagefright/home')),
  },
  music: {
    component: lazy(() => import('@stagefright/home')),
  },
  socialmedia: lazy(() => import('@stagefright/home')),
} as const;

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

/* eslint-disable-next-line */
export interface RouterProps {}

export const Router = (props: RouterProps) => {
  return (
    <div>
      <h1>Welcome to Router!</h1>
    </div>
  );
};

export default Router;
