import React from 'react';
import './app.css';
import ErrorBoundary from '../error-boundary';
import { MyServiceProvider } from '../my-service-context';
import MyService from '../../services/service';
import Table from '../table';
import ControlPanel from '../control-panel/control-panel';

const App = () => {
  const service = new MyService();

  return (
    <ErrorBoundary>
      <MyServiceProvider value={service}>
        <ControlPanel />
        <Table />
      </MyServiceProvider>
    </ErrorBoundary>
  );
}

export default App;
