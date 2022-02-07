import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Homepage from './pages/Homepage';
import LoginWrapper from './pages/LoginWrapper';
import Profile from './pages/Profile';
import EmissionDonation from './pages/EmissionDonation';
import FooterSvg from './components/FooterSvg';

import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Toolbar />
            <Route exact path='/'>
              <Homepage />
              <EmissionDonation />
              <FooterSvg />
            </Route>
            <Route exact path='/login' component={LoginWrapper} />
            <Route exact path='/profile' component={Profile} />
          </Router>
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
