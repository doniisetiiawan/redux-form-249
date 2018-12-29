import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'react-popup';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';
import './Popup.css';

const App = props => (
  <div className="App">
    <Header title="Welcome to Codejobs" />

    <Content>
      {props.children}
    </Content>

    <Footer />
    <Popup />
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
