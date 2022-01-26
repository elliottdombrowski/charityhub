import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>testing</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
