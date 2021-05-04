import React, { Component } from 'react'

class CardList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3 className='card-list-deck-name'>{this.props.match.params.name}</h3>
                <section>

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