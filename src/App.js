import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Dashboard from './dashboard/Dashboard'
import Register from './register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header role="banner" className="page-header">React POC</header>
      <section role="contentinfo" className="content">
        <Router>
          <div>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/">
                <Register />
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    </React.Fragment>
  );
}

export default App;
