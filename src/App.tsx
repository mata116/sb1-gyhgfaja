import React from 'react';
import Layout from './components/Layout';
import { AppStateProvider } from './hooks/useAppState';

function App() {
  return (
    <AppStateProvider>
      <Layout />
    </AppStateProvider>
  );
}

export default App;