import { SET_CARDS, DELETE_CARD, LIKE_CARD, DISLIKE_CARD, FILTER_CARDS, UNFILTER_CARDS } from "./actions"

const initialState = {
  listOfCards: [],
  listOfLikedCards: [],
  listOfLikedCardsTitles: [],
  reserved: [],
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        listOfCards: action.payload,
        reserved: action.payload,
      }
    case DELETE_CARD:
      return {
        ...state,
        listOfCards: [
          ...state.listOfCards.slice(0, action.payload),
          ...state.listOfCards.slice(action.payload + 1)
        ],
        reserved: [
          ...state.listOfCards.slice(0, action.payload),
          ...state.listOfCards.slice(action.payload + 1)
        ],
      }
    case LIKE_CARD:
      return {
        ...state,
        listOfLikedCards: [
          ...state.listOfLikedCards,
          action.payload
        ],
        listOfLikedCardsTitles: [
          ...state.listOfLikedCardsTitles,
          action.payload['Scientific Name'],
        ],
      }
    case DISLIKE_CARD:
      return {
        ...state,
        listOfLikedCards: [
          ...state.listOfLikedCards.slice(0, action.payload),
          ...state.listOfLikedCards.slice(action.payload + 1)
        ],
      }
    case FILTER_CARDS:
      return {
        ...state,
        listOfCards: [
          ...state.listOfLikedCards
        ],
      }
    case UNFILTER_CARDS:
      return {
        ...state,
        listOfCards: [...state.reserved],
      }
    default:
      return state
  }
}