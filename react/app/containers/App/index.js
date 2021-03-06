/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import OfferPage from 'containers/OfferPage/Loadable';
import OfferNewPage from 'containers/OfferNewPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import {
  REGISTER_PAGE_URL,
  OFFER_PAGE_URL,
  OFFER_NEW_PAGE_URL,
} from './constants';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={REGISTER_PAGE_URL} component={RegisterPage} />
        <Route path={OFFER_PAGE_URL} component={OfferPage} />
        <Route path={OFFER_NEW_PAGE_URL} component={OfferNewPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
