import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './context/LogContext';
import {SearchContext, SearchContextProvider} from './context/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider> 
    </NavigationContainer>
  );
}

export default App;