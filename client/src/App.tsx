import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar/index.tsx';
import Toolbar from './components/Toolbar/index.tsx';
import Homepage from './pages/Homepage/index.tsx';
import LoginWrapper from './pages/LoginWrapper/index.tsx';
import Profile from './pages/Profile/index.tsx';
import EmissionDonation from './pages/EmissionDonation/index.tsx';
import Footer from './components/Footer/index.tsx';
import MessageWrapper from './pages/MessageWrapper/index.tsx';
import BlogWrapper from './pages/BlogWrapper/index.tsx';
import CharityWrapper from './pages/CharityWrapper/index.tsx';
import NewsWrapper from './pages/NewsWrapper/index.tsx';
import BackToTopBtn from './components/Btns/BackToTopBtn/index.tsx';
import NotFound from './pages/NotFound/index.tsx';

import FooterSvg from './components/Svgs/FooterSvg';

import './App.scss';

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
            <BackToTopBtn />

            <Switch>
              <Route exact path='/'>
                <Homepage />
                <EmissionDonation />
                <FooterSvg />
              </Route>
              <Route exact path='/login' component={LoginWrapper} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/messages' component={MessageWrapper} />
              <Route exact path='/blog' component={BlogWrapper} />
              <Route exact path='/charities' component={CharityWrapper} />
              <Route exact path='/news' component={NewsWrapper} />
              <Route component={NotFound} />
            </Switch>

            <Footer />
          </Router>
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
