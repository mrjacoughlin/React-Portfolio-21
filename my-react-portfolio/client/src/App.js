// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" render={() => <Home />} />
            <Route path="/projects" render={() => <Projects />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
