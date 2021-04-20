import React from 'react'
import {HashRouter, Link} from 'react-router-dom';

export default function UserDecks() {
    return (
        <div>
            <section className='your-decks-header'>
                <h3>Your Decks</h3>
                <h3 className='new-deck'>Create New Deck</h3>
            </section>
            <section className='deck-display'>
                <div>
                    <h5>Deck Title</h5>
                </div>
                <div>
                    <Link to='/flashcard' className='deck-options'>Study</Link>
                    <Link to='add-card' className='deck-options'>Add Card</Link>
                    <Link to='card-list' className='deck-options'>View Cards</Link>
                    <h5 className='deck-options'>Rename Deck</h5>
                    <h5 className='deck-options'>Delete Deck</h5>
                </div>
            </section>
        </div>
    )
}
