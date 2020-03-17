import React from 'react';

import { Container, Box } from '@material-ui/core';

import ErrorBoundary from '../error-boundary';
import { MyServiceProvider } from '../my-service-context';
import MyService from '../../services/service';
import Table from '../table';
import ControlPanel from '../control-panel';

import './app.css';

const App = () => {
  const service = new MyService();

  return (
    <Container maxWidth='lg'>
      <ErrorBoundary>
        <MyServiceProvider value={service}>
          <Box display='flex' flexDirection='column'>
            <ControlPanel />
            <Table />
          </Box>
        </MyServiceProvider>
      </ErrorBoundary>
    </Container>
  );
}

export default App;
