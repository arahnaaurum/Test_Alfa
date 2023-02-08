import { configureStore } from '@reduxjs/toolkit'
import { cardsReducer } from './cards/reducer'

export const store =  configureStore({
    reducer: {
      cards: cardsReducer
    }
  })