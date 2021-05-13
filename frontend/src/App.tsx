import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from "react-router-dom";
import 'bootswatch/dist/solar/bootstrap.min.css'
import logo from './assets/img/spacex-logo.png'
import routes from './config/routes';
// /import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} alt="SpaceX Logo" className="img-fluid" />
        </div>
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              )
            })}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
