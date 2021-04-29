import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import MappedDecks from './MappedDecks';

class UserDecks extends Component {
    constructor() {
        super();
        this.state = {
            deckName: '',
            userDecks: []
        }
    }

    componentDidMount() {
        if (!this.props.user) {
            return this.props.history.push('/')
        }
        this.getDecks();
    }
   
    handleDeckNameInput(e) {
        this.setState({deckName: e.target.value});
    }

    getDecks() {
        axios
            .get('/api/decks/')
            .then((res) => {
                this.setState({userDecks: res.data});
            })
            .catch(error => {
                alert(error.response.request.response)
            })
    }

    createDeck() {
        const {deckName} = this.state
        axios
            .post('/api/decks/', {deckName})
            .then(() => {
                this.setState({deckName: ''})
            })
            .catch((error) => {
                alert(error.response.request.response)
            })
    }

    render() {
        const decksMapped = this.state.userDecks.map(deck => {
            return <MappedDecks deck={deck}/>
        })

            return (
                <div>
                    <section className='your-decks-header'>
                        <h3>Your Decks</h3>
                    </section>
                    <input
                        type='text'
                        placeholder='Enter deck name'
                        onChange={e => this.handleDeckNameInput(e)}
                        value={this.state.deckName}
                    ></input>
                    <button
                        onClick={() => this.createDeck()}
                    >Create New Deck</button>
                    {decksMapped}
                </div>
            )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(UserDecks)