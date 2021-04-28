import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';
import routes from './routes';
import './App.css';
import {connect} from 'react-redux';
import {updateUser} from './redux/user_reducer';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    axios
      .get('/auth/session')
      .then(user => {
        this.props.updateUser(user.data);
      })
  }

  logout() {
    axios
      .get('/auth/logout')
      .then(() => {
        this.props.updateUser(null);
        this.props.history.push('/');
      })
  }

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
              <button onClick={() => this.logout()}>Logout</button>
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

export default withRouter(connect(mapStateToProps, {updateUser})(App));