import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import People from './people';
import PersonDetail from '../components/person-detail';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <People path="/" />
      <PersonDetail path="/details/:name/" />
    </Router>
  );
}
