import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import LoginWrapper from './pages/LoginWrapper';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Route exact path='/'>
            <Navbar />
            <Toolbar />
          </Route>

          <Route exact path='/login' component={LoginWrapper} />
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
