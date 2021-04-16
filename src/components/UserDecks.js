import React from 'react'

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
                    <h5 className='deck-options'>Study</h5>
                    <h5 className='deck-options'>Add Card</h5>
                    <h5 className='deck-options'>View Cards</h5>
                    <h5 className='deck-options'>Rename Deck</h5>
                    <h5 className='deck-options'>Delete Deck</h5>
                </div>
            </section>
        </div>
    )
}
