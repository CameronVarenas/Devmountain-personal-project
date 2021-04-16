import React from 'react'

export default function AddCardToDeck() {
    return (
        <div>
            <h3 className='add-a-card'>Add a card to:</h3>
            <h4>(Deck Name)</h4>
            <section>
                <h3>Front:</h3>
                <input className='add-card-inputs' placeholder='Card Front'></input>
            </section>
            <section>
                <h3>Back:</h3>
                <input className='add-card-inputs' placeholder='Card Back (Answer)'></input>
            </section>
            <button className='add-card-button'>Add Card</button>
        </div>
    )
}
