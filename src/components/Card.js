import React from 'react';
import '../styles/Card.css'
import { useDispatch } from "react-redux";
import { deleteCard } from '../store/cards/actions';
import { Like } from './Like';

export function Card(props) {
    const dispatch = useDispatch();
    let card = props.card;
    let index = props.index;
    let title = '';
    let description = '';
    let image = null;

    title = card['Scientific Name'];
    // описание приходит с HTML-разметкой, используем ее:
    description = { __html: card['Physical Description'] };
    // Некоторые Image Gallery - пустые объекты, некоторые - массивы, поэтому нужна доп.обработка:
    if (card['Image Gallery'] && card['Image Gallery'][0]) {
        image = card['Image Gallery'][0];
    } else if (card['Image Gallery']) {
        image = card['Image Gallery']
    };

    return <div className='card_container'>
        <h3 className='card_title'>{title}</h3>
        {image ? <img src={image.src} alt={image.alt} width='300'></img>
            :
            // Поставим картинку-заглушку для пустых Image Gallery:
            <img src='https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/Atlantic%20Chub%20Mackerel_Alessandro%20Duci.jpg' alt='default pic' width='300'></img>
        }
        <div className='card_description' dangerouslySetInnerHTML={description}></div>
        <svg onClick={() => { dispatch(deleteCard(index)) }} className='card_icon_delete' version="1.1" id="Capa_1" viewBox="0 0 460.775 460.775">
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                    c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                    c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                    c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                    l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                    c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
        </svg>
        <Like index={index} title={title} card={card}/>
    </div>

}