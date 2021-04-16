import React from 'react'

export default function Flashcard() {
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
