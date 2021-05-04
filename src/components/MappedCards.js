import React from 'react'

export default function MappedCards(props) {
    return (
        <div className='mapped-cards'>
            <h5 className='mapped-cards-content'>{props.card.card_front}</h5>
            <h5 className='mapped-cards-content'>{props.card.card_back}</h5>
            <section className='mapped-cards-buttons'>
                <button
                    className='mapped-cards-edit'
                >Edit Card</button>
                <button
                >Delete Card</button>
            </section>
        </div>
    )
}
