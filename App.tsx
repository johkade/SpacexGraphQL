import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';
import CONFIG from './app/const/config';
import RootStack from './app/nav/rootStack/rootStack';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: CONFIG.SPACEX_BASE,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootStack />
    </ApolloProvider>
  );
}
