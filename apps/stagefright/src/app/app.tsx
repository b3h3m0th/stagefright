import * as dotenv from 'dotenv';
import './app.scss';
import React, { useEffect } from 'react';
import * as fromRouter from '@stagefright/router';
import { Provider as StoreProvider } from 'mobx-react';
import {
  NoiseBackground,
  SkewScrollingWrapper,
} from '@stagefright/shared/components';

dotenv.config();

// stores
const stores = {};

export const App: React.FC = () => {
  useEffect(() => {
    console.log('ready!');
  }, []);

  return (
    <React.StrictMode>
      <StoreProvider {...stores}>
        <SkewScrollingWrapper>
          <fromRouter.Router />
        </SkewScrollingWrapper>
        <NoiseBackground />
      </StoreProvider>
    </React.StrictMode>
  );
};

export default App;
