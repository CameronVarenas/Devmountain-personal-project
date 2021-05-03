import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flashcard from './Flashcard';

class MappedDecks extends Component {
    constructor() {
        super();
        this.state = {
            deckNewName: ''
        }
    }

    handleDeckNewNameInput(e) {
        this.setState({deckNewName: e.target.value});
    }

    render() {
        return (
            <section className='deck-display'>
            <div>
                <h5>{this.props.deck.name}</h5>
            </div>
            <div>
                <Link
                    to={`/flashcard/${this.props.deck.deck_id}`}
                    className='deck-options'
                >Study</Link>
                <Link to='add-card' className='deck-options'>Add Card</Link>
                <Link to='card-list' className='deck-options'>View Cards</Link>
                <button
                    className='deck-options'
                    onClick={() => {
                        this.props.renameDeck(this.props.deck.deck_id, this.state.deckNewName)
                        this.setState({deckNewName: ''})
                    }}
                >Rename Deck</button>
                <button
                    className='deck-options'
                    onClick={() => this.props.deleteDeck(this.props.deck.deck_id)}
                >Delete Deck</button>
            </div>
            <input
                type='text'
                placeholder='Enter a new name'
                onChange={e => this.handleDeckNewNameInput(e)}
                value={this.state.deckNewName}
            ></input>
            </section>
        )
    }
}

export default MappedDecks;