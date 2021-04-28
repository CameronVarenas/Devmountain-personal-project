import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import routes from './routes';
import './App.css';
import {connect} from 'react-redux';
import {updateUser} from './redux/user_reducer';

class App extends Component {
  render() {
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

const mapStateToProps = state => state

export default connect(mapStateToProps, {updateUser})(App);