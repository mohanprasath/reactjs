import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <div>Home Page</div>;
};

export default App;
