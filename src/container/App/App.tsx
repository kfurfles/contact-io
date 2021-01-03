import React from 'react';

import Reset from './styled';
import Contacts from '../Contacts';
import Header from '../../components/Header';
import { Global } from '@emotion/react'

const App = () => {

  return (
  <React.Fragment>
      <Global styles={Reset} />
      <Header />
      <Contacts />
  </React.Fragment>)
}

export default App;
