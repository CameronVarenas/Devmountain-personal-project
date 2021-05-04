import React, { Component } from 'react';
import axios from 'axios';
import MappedCards from './MappedCards';

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            flashcardData: [],
            card_front: '',
            card_back: ''
        }
    }

    componentDidMount() {
        this.getAllFlashcards();
    }

    getAllFlashcards() {
        axios
            .get(`api/flashcards/${this.props.match.params.deck_id}`)
            .then(res => {
                this.setState({flashcardData: res.data});
            })
            .catch(error => {
                alert(error);
            })
    }

    render() {
        const cardsMapped = this.state.flashcardData.map(card => {
            return <MappedCards
                card={card}
            />
        })
        return (
            <div>
                <h3 className='card-list-deck-name'>Your Flashcards</h3>
                <section className='mapped-cards-section'>
                    {cardsMapped}
                </section>
                <h3>Edit Card:</h3>
                <section>
                    <h4>Front:</h4>
                    <input className='card-list-inputs' placeholder='Card-Front'></input>
                    <h4>Back:</h4>
                    <input className='card-list-inputs' placeholder='Card-Back'></input>
                </section>
                <button className='card-list-button'>Update Card</button>
            </div>
        )
    }
}

export default CardList;