import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Filter } from './Filter';
import { Card } from './Card';
import '../styles/Cards.css';

export function Cards() {

    const { listOfCards } = useSelector((state) => state.cards);

    useEffect(() => {
        if (listOfCards.length !== 0) {
            console.log(listOfCards);
        }
    }, [])

    if (listOfCards.length !== 0) {
        return <div className='cards_container'>
            <h2 className='cards_title'>Marine Life</h2>
            <Filter />
            {
                listOfCards.map((card, index) => {
                    return <>
                        <Card key={index} index={index} card={card} />
                    </>
                })
            }
        </div>
    }

    return <h3>Cards are loading</h3>
}