import React, { Component } from 'react'
import axios from 'axios';

class AddCardToDeck extends Component {
    constructor() {
        super();
        this.state = {
            card_front: '',
            card_back: ''
        }
    }

    handleCardFrontInput(e) {
        this.setState({card_front: e.target.value});
    }

    handleCardBackInput(e) {
        this.setState({card_back: e.target.value});
    }

    addCard() {
        const {card_front, card_back} = this.state
        axios
            .post(`/api/flashcards/${this.props.match.params.deck_id}`, {
                card_front,
                card_back
            })
            .then(this.setState({card_front: '', card_back: ''}))
            .catch(error => {
                alert(error)
            })
    }

    render() {
        return (
            <div>
                <h3 className='add-a-card'>Add a card to your deck</h3>
                <h4>{this.props.match.params.name}</h4>
                <section>
                    <h3>Front:</h3>
                    <input
                        type='text'
                        className='add-card-inputs'
                        placeholder='Card Front'
                        onChange={e => this.handleCardFrontInput(e)}
                        value={this.state.card_front}
                    ></input>
                </section>
                <section>
                    <h3>Back:</h3>
                    <input
                        type='text'
                        className='add-card-inputs'
                        placeholder='Card Back (Answer)'
                        onChange={e => this.handleCardBackInput(e)}
                        value={this.state.card_back}
                    ></input>
                </section>
                <button
                className='add-card-button'
                onClick={() => this.addCard()}
                >Add Card</button>
            </div>
        )
    }
}

export default AddCardToDeck;