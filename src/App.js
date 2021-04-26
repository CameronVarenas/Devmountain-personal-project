import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({
      user,
    });
  }

  render() {
    const {user} = this.state;
    return (
      <HashRouter>
        <div className='App'>
          <header className='header'>
            <section className='header-text'>
              <h1 className='title'>Kioku</h1>
              <Link to='/user-decks' className='options'>Home</Link>
              <Link to='/' className='options'>About</Link>
              <Link to='/auth' className='login'>Log In</Link>
            </section>
          </header>
          <div className='page-display'>
            {routes}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App