import * as dotenv from 'dotenv';
import './app.scss';
import React from 'react';
import * as fromRouter from '@stagefright/router';
import { Provider as StoreProvider } from 'mobx-react';
import { SkewScrollingWrapper } from '@stagefright/shared/components';

dotenv.config();

// stores
const stores = {};

export const App: React.FC = () => {
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     document.querySelector().scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   });
  // });
  return (
    <SkewScrollingWrapper>
      <React.StrictMode>
        <StoreProvider {...stores}>
          <fromRouter.Router />
        </StoreProvider>
      </React.StrictMode>
    </SkewScrollingWrapper>
  );
};

export default App;
