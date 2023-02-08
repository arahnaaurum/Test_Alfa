import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { filterCards, unfilterCards } from '../store/cards/actions';
import '../styles/Filter.css';

export function Filter() {
    const dispatch = useDispatch();
    const [activeState, setActiveState] = useState(false);

    function handleClick() {
        if (!activeState) {
            dispatch(filterCards());
            setActiveState(prev => !prev);
        } else {
            dispatch(unfilterCards());
            setActiveState(prev => !prev);
        }
    }

    return <button className={`btn_filter ${activeState ? 'filtered' : ''}`} onClick={handleClick}>{activeState ? 'Show all' : 'Filter' }</button>
}