/**
 * Routes.js
 * Contains the react route in the application
 * Future scope - TO create private routes to be used by authenticated users

import Reac0t from 'react';
import { Route, Switch } from 'react-router-dom';
import GenreDetails from '../GenreDetails/GenreDetails';
import FancyItem from '../FancyItem/FancyItem';
import GenreFancyItem from '../GenreFancyItem/GenreFancyItem';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/genreDetails" component={GenreDetails} />
      <Route
        exact
        path="/genreFancyitems/:genreName"
        component={GenreFancyItem}
      />
      <Route exact path="/FancyItem/:id" component={FancyItem} />
    </Switch>
  );
}
 */
