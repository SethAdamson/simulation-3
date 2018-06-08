import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import Auth from './components/Auth/Auth';
// import Post from './components/Post/Post';
// import Nav from './components/Nav/Nav';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
