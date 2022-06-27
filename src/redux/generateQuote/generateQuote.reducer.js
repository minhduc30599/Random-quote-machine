import { generateQuote } from "./generateQuote.action";
import { createReducer } from "@reduxjs/toolkit";
import quotes from '../../database/quotesDB';
import colors from '../../database/colorsDB';

const initial_state = {
     quote: quotes[0].quote,
     author: quotes[0].author,
     color: colors[0]
};


const generateReducer = createReducer(initial_state, {
     [generateQuote.type]: () => ({
          quote: quotes[Math.floor(Math.random() * quotes.length)].quote, 
          author: quotes[Math.floor(Math.random() * quotes.length)].author, 
          color: colors[Math.floor(Math.random() * colors.length)]
     })
})

export default generateReducer;

// const GENERATE = generateQuote.type;
//
// const generateReducer = (state = initial_state, action) => {
//      switch (action.type) {
//           case GENERATE: 
//              return {
//                ...state, 
//                quote: quotes[Math.floor(Math.random() * quotes.length)].quote, 
//                author: quotes[Math.floor(Math.random() * quotes.length)].author, 
//                color: colors[Math.floor(Math.random() * colors.length)]
//              };
//           default: 
//              return state;
//      }
// }
