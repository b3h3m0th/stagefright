import * as dotenv from 'dotenv';
import './app.scss';
import React from 'react';
import * as fromRouter from '@stagefright/router';
import { Provider as StoreProvider } from 'mobx-react';
import { SkewScrollingWrapper } from '@stagefright/shared/components';
import { VFXProvider } from 'react-vfx';

dotenv.config();

// stores
const stores = {};

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <StoreProvider {...stores}>
        <VFXProvider>
          {/* <SkewScrollingWrapper> */}
          <fromRouter.Router />
          {/* </SkewScrollingWrapper> */}
        </VFXProvider>
      </StoreProvider>
    </React.StrictMode>
  );
};

export default App;
