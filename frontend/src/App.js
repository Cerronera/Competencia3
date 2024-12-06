import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginTutora from './pages/LoginTutora';
import RegisterTutora from './pages/RegisterTutora';
import LoginAluna from './pages/LoginAluna';
import RegisterAluna from './pages/RegisterAluna';
import LoginAdm from './pages/LoginAdm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login-tutora" component={LoginTutora} />
        <Route path="/register-tutora" component={RegisterTutora} />
        <Route path="/login-aluna" component={LoginAluna} />
        <Route path="/register-aluna" component={RegisterAluna} />
        <Route path="/login-adm" component={LoginAdm} />
      </Switch>
    </Router>
  );
}

export default App;