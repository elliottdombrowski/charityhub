import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar/';
import Toolbar from './components/Toolbar/';
import HomepageWrapper from './pages/HomepageWrapper/';
import LoginWrapper from './pages/LoginWrapper/';
import Profile from './pages/Profile/';
import EmissionDonation from './pages/EmissionDonation/';
import EmissionHeader from './components/EmissionHeader';
import Footer from './components/Footer/';
import MessageWrapper from './pages/MessageWrapper/';
import BlogWrapper from './pages/BlogWrapper/';
import Comments from './components/Cards/Comments';
import CharityWrapper from './pages/CharityWrapper/';
import NewsWrapper from './pages/NewsWrapper/';
import BackToTopBtn from './components/Btns/BackToTopBtn/';
import NotFound from './pages/NotFound/';

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
  let location = useLocation();

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div className="App">
            <Navbar />
            <Toolbar />
            <BackToTopBtn />

            <AnimatePresence exitBeforeEnter>
              <Switch 
                key={location.pathname}
                location={location}
              >
                <Route exact path='/' component={HomepageWrapper} />
                <Route exact path='/login' component={LoginWrapper} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/messages' component={MessageWrapper} />
                <Route exact path='/blog' component={BlogWrapper} />
                <Route exact path='/comments' component={Comments} />
                <Route exact path='/charities' component={CharityWrapper} />
                <Route exact path='/news' component={NewsWrapper} />
                <Route exact path='/emissions' component={EmissionDonation} />
                <Route component={NotFound} />
              </Switch>
            </AnimatePresence>

            <Footer />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
