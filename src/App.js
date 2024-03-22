// src/App.js
import React from 'react';
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Dashboard from './Dashboard.js';

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: '8c68f816-a5d0-4fc9-bb5b-d4ff51d7b04f',
      walletConnectors: [EthereumWalletConnectors],
    }}>
    <DynamicWidget>
      <Dashboard />
    </DynamicWidget>
  </DynamicContextProvider>
);

export default App;
