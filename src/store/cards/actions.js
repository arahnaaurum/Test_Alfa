export const SET_CARDS = 'CARDS::SET_CARDS'
export const DELETE_CARD = 'CARDS::DELERE_CARD'
export const LIKE_CARD = 'CARDS::LIKE_CARD'
export const DISLIKE_CARD = 'CARDS::DISLIKE_CARD'
export const FILTER_CARDS = 'CARDS::FILTER_CARDS'
export const UNFILTER_CARDS = 'CARDS::UNFILTER_CARDS'

export const setCards = (value) => ({
    type: SET_CARDS,
    payload: value,
})

export const deleteCard = (value) => ({
    type: DELETE_CARD,
    payload: value,
})

export const likeCard = (value) => ({
    type: LIKE_CARD,
    payload: value,
})

export const dislikeCard = (value) => ({
    type: DISLIKE_CARD,
    payload: value,
})

export const filterCards = () => ({
    type: FILTER_CARDS
})

export const unfilterCards = () => ({
    type: UNFILTER_CARDS
})