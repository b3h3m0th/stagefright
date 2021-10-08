import React from 'react';
import * as fromRouter from '@stagefright/router';
import { Provider as StoreProvider } from 'mobx-react';

// stores
const stores = {};

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <StoreProvider {...stores}>
        <fromRouter.Router />
      </StoreProvider>
    </React.StrictMode>
  );
};

export default App;
