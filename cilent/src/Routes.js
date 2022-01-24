import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
// import Google from './components/auth/Google';
export default function Routes() {
    return (
    
        <Router>
          <Switch>
            {/* <Route exact path="/google" component={Google} /> */}
            <Route exact path="/">
              <App />
            </Route>
          </Switch>
        </Router>
   
    );
}
