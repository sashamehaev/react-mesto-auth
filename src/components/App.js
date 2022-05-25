import React from 'react';
import MyApp from './MyApp';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';
import * as Auth from '../utils/Auth.js';
import success from '../images/success.svg';
import unSuccess from '../images/unsuccess.svg';

function App() {
  const [loggedIn, SetloggedIn] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const history = useHistory();

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }
  function handleInfoTooltip(state) {
    setIsInfoTooltipOpen(state);
  }

  function handleLogin() {
    SetloggedIn(true);
  }

  function handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      Auth.checkToken(jwt)
        .then(() => {
          handleLogin();
          history.push('/');
        });
    }
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, []);


  return (
    <>
      <Switch>
        <Route path="/sign-in">
          <Login handleLogin={handleLogin} onFail={handleInfoTooltip} />
          <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeInfoTooltip}>
            <img src={unSuccess} className="form__infoTooltip" />
            <h2 className="form__title form__title_type_infoTooltip">Что-то пошло не так! Попробуйте ещё раз.</h2>
          </InfoTooltip>
        </Route>
        <Route path="/sign-up">
          <Register onSuccess={handleInfoTooltip} />
          <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeInfoTooltip}>
            <img src={success} className="form__infoTooltip" />
            <h2 className="form__title form__title_type_infoTooltip">Вы успешно зарегистрировались!</h2>
          </InfoTooltip>
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
