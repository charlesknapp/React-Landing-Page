import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGpt3, Header } from './containers';
import { Cta, Brand, Navbar } from './components';

import './App.css';
import './Index.css'

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGpt3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;