import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import LoginForm from './components/LoginForm';

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
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
