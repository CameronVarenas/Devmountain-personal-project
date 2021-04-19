import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Auth from './components/Auth';
import UserDecks from './components/UserDecks';
import Flashcard from './components/Flashcard';
import AddCardToDeck from './components/AddCardToDeck';
import CardList from './components/CardList'

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <section className='header-text'>
            <h1 className='title'>Kioku</h1>
            <h3 className='options'>Home</h3>
            <h3 className='options'>About</h3>
            <h3 className='login'>Log In</h3>
          </section>
        </header>
        <div className='page-display'>
          <Landing />
          {/* <Auth /> */}
          {/* <UserDecks /> */}
          {/* <Flashcard /> */}
          {/* <AddCardToDeck /> */}
          {/* <CardList /> */}
        </div>
      </div>
    );
  }
}

export default App