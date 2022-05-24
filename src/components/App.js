import React from 'react';
import MyApp from './MyApp';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [loggedIn, SetloggedIn] = React.useState(false);


  return (
    <>
      <Switch>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <ProtectedRoute
          path="/"
          loggedIn={loggedIn}
          component={MyApp}
        />
        <Route exact path="/">
          {loggedIn ?
            <Redirect to="/" /> :
            <Redirect to="/sign-in" />}
        </Route>
      </Switch>


    </>
  );
}

export default App;
