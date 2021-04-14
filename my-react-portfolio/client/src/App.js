// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import ContactMe from "./Pages/ContactMe";
import AboutMe from "./Pages/AboutMe";
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
            <Route path="/technologies" render={() => <Technologies />} />
            <Route path="/contact-me" render={() => <ContactMe />} />
            <Route path="/about-me" render={() => <AboutMe />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
