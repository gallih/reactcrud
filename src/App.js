import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import post from './component/posts';
import postadd from './component/posts/create';
import users from './component/users';
import usersadd from './component/users/create';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Social Media</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/post'} className="nav-link">Post</Link>
              </li>
              <li className="nav-item">
                <Link to={'/users'} className="nav-link">Users</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Album</Link>
              </li>
            </ul>
          </div>
        </nav> <br />

        <Switch>
          <Route exact path='/post' component={post} />
          <Route exact path='/postadd' component= {postadd} />
          <Route exact path='/users' component= {users} />
          <Route exact path='/usersadd' component= {usersadd} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
