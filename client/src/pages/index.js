import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Tracks from './tracks';
import PersonDetail from '../components/person-detail';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <PersonDetail path="/details/:name/" />
    </Router>
  );
}
