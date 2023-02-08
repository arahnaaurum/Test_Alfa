import React, { useState, useEffect } from 'react';
import '../styles/Like.css'
import { useDispatch, useSelector } from "react-redux";
import { likeCard, dislikeCard } from '../store/cards/actions';

export function Like(props) {
    const dispatch = useDispatch();
    const { listOfCards, listOfLikedCardsTitles } = useSelector((state) => state.cards);
    const [activeState, setActiveState] = useState(false);

    let card = props.card;
    let title = props.title;
    let index = props.index;

    useEffect(()=>{
        //проверка нужна, чтобы лайки не сбрасывались при фильтрации
        if (listOfLikedCardsTitles.includes(title)){
            setActiveState(true);
        } else {
            setActiveState(false);
        };    
    }, [listOfCards])

    function handleClick () {
        if (!activeState) {
            dispatch(likeCard(card));
            setActiveState(prev => !prev);
        } else {
            dispatch(dislikeCard(index));
            setActiveState(prev => !prev);
        }
    }

    return <>
        <svg className={`icon_like ${activeState ? 'liked' : ''}`} onClick={handleClick} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 107.41">
        <g><path d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z" /></g></svg>
    </>

}