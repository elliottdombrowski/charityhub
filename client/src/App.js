import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar/index.js';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Navbar />
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
