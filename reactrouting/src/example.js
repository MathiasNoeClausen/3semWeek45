import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './style2.css'


const Content = () => {
    return(
        <div>
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        </div>
      </div>
    )
}

const Header = () => {
    return(
        <>
         <ul className="header">
          <li>
          <NavLink exact activeClassName="selected" to="/">Home</NavLink>

          </li>
          <li>
            <NavLink activeClassName="selected" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>

        <hr />
        </>
    );
}

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      
        <Header/>
        <Content/>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}