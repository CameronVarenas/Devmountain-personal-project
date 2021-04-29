import React from 'react';
import {Link} from 'react-router-dom';

export default function MappedDecks(props) {
    return (
        <section className='deck-display'>
        <div>
            <h5>{props.deck.name}</h5>
        </div>
        <div>
            <Link to='/flashcard' className='deck-options'>Study</Link>
            <Link to='add-card' className='deck-options'>Add Card</Link>
            <Link to='card-list' className='deck-options'>View Cards</Link>
            <h5 className='deck-options'>Rename Deck</h5>
            <h5 className='deck-options'>Delete Deck</h5>
        </div>
    </section>
    )
}