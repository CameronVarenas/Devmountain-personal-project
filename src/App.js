import './App.css';
import Landing from './components/Landing';
import Auth from './components/Auth';
import UserDecks from './components/UserDecks';
import Flashcard from './components/Flashcard';
import AddCardToDeck from './components/AddCardToDeck';

function App() {
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
        {/* <Landing /> */}
        {/* <Auth /> */}
        {/* <UserDecks /> */}
        {/* <Flashcard /> */}
        <AddCardToDeck />
      </div>
    </div>
  );
}

export default App;
