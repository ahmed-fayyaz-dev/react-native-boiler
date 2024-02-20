import React from 'react';
import AppNavigation from './AppNavigation';
import ReduxProvider from '~/store/store';

const AppContainer = props => {
  return (
    <ReduxProvider>
      <AppNavigation />
    </ReduxProvider>
  );
};

export default AppContainer;
