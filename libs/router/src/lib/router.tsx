import { lazy, Suspense } from 'react';
import './router.module.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { propnameOf } from '@stagefright/shared/util';
import { Loader } from '@stagefright/loader';
import { AnimatePresence, motion } from 'framer-motion';

const pages = {
  home: {
    component: lazy(() => import('@stagefright/home')),
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

/* eslint-disable-next-line */
export interface RouterProps {}

export const Router = (props: RouterProps) => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            {Object.entries(pages).map(([pageKey, component]) => (
              <Route
                key={pageKey}
                exact
                path={`/${ROUTES[pageKey as keyof typeof pages]}`}
                component={() => (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 1 }}
                      transition={{
                        duration: 2 / 1000,
                      }}
                    >
                      <component.component />
                    </motion.div>
                  </AnimatePresence>
                )}
              />
            ))}

            <Route
              path={`*`}
              component={() => <Redirect to={`/${ROUTES.home}`} />}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Router;
