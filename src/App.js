import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  render() {
    return (
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route path="/home" component={HomePage} />
			</Switch>
    );
  }
}
export default App
