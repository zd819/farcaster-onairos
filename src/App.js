// src/App.js
import React from 'react';
import { DynamicContextProvider, DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Dashboard from './Dashboard.js';

// Create a component that will render the dashboard conditionally
const DynamicApp = () => {
  const { isAuthenticated } = useDynamicContext();

  // Replace this condition with the actual check provided by Dynamic SDK for a successful login
  if (isAuthenticated) {
    return <Dashboard />;
  }

  // Render the DynamicWidget if not authenticated
  return <DynamicWidget />;
}

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: '8c68f816-a5d0-4fc9-bb5b-d4ff51d7b04f',
      walletConnectors: [EthereumWalletConnectors],
    }}>
    <DynamicApp />
  </DynamicContextProvider>
);

export default App;
