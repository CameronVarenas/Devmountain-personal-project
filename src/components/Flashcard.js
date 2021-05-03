import React, { Component } from 'react'
import axios from 'axios';

class Flashcard extends Component {
    constructor() {
        super();
        this.state = {
            showAnswer: false,
            flashcardData: []
        }
    }

    componentDidMount() {
        this.getAllFlashcards();
    }

    getAllFlashcards() {
        axios
            .get(`api/flashcards/${this.props.match.params.deck_id}`)
            .then(res => {
                this.setState({flashcardData: res.data})
            })
            .catch(error => {
                alert(error);
            })
    }

    render() {
        return (
            <div className='flashcard'>
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </section>
                <button className='flashcard-buttons'>Show Answer</button>
                <p className='flashcard'>-------------------------------------------------------</p>
                <section className='flashcard'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </section>
                <button className='flashcard-buttons'>Previous</button>
                <button className='flashcard-buttons'>Next</button>
            </div>
        )
    }
}

export default Flashcard;