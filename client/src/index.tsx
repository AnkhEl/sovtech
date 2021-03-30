import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import PersonContextProvider from './personContext';

const client = new ApolloClient({
  uri: 'http://localhost:4000', //uri of the apollo server 
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <PersonContextProvider>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
      </ApolloProvider>
    </PersonContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
