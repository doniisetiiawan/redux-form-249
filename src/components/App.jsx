import React from 'react';
import Popup from 'react-popup';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import Person from './Person/Person';
import './App.css';
import './Popup.css';

const App = () => (
  <div className="App">
    <Header title="Welcome to Codejobs" />
    <Content>
      <Person />
    </Content>
    <Footer />
    <Popup />
  </div>
);

export default App;
