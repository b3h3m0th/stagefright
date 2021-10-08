import { Suspense } from 'react';
import './router.module.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Loader } from '@stagefright/loader';
import { AnimatePresence, motion } from 'framer-motion';
import { pages, ROUTES } from './routes';
import { Header } from '@stagefright/shared/components';

/* eslint-disable-next-line */
export interface RouterProps {}

export const Router: React.FC = (props: RouterProps) => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
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
