import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import CONFIG from './app/const/config';
import RootStack from './app/nav/rootStack/rootStack';

// Initialize Apollo Client
const apolloClient = new ApolloClient({
  uri: CONFIG.SPACEX_BASE,
  cache: new InMemoryCache(),
});

// Initialize react-query Client
const queryClient = new QueryClient({
  defaultOptions: {queries: {suspense: true}},
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <RootStack />
      </ApolloProvider>
    </QueryClientProvider>
  );
}
