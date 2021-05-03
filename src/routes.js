import react from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Landing from './components/Landing';
import Auth from './components/Auth';
import UserDecks from './components/UserDecks';
import Flashcard from './components/Flashcard';
import AddCardToDeck from './components/AddCardToDeck';
import CardList from './components/CardList';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/auth' component={Auth} />
        <Route path='/user-decks' component={UserDecks} />
        <Route path='/flashcard/:deck_id' component={Flashcard} />
        <Route path='/add-card' component={AddCardToDeck} />
        <Route path='/card-list' component={CardList} />
    </Switch>
)