import React from 'react'

export default function CardList() {
    return (
        <div>
            <h3 className='card-list-deck-name'>(Deck Name)</h3>
            <section>
                <div className='card-list-flashcard'>
                    <h4>Front: card data...</h4>
                    <h4>|</h4>
                    <h4>Back: card data...</h4>
                    <h4>Edit</h4>
                    <h4>Remove Card</h4>
                </div>
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
