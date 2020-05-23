import { SET_LANGUAGE, NEW_QUOTE } from "./actions";
import {
  languages,
  getNewQuote,
  getRandomColor,
} from "../listOfQuotes/quoteConstants";

const initialState = {
  language: Object.keys(languages)[0],
  quote: getNewQuote(Object.keys(languages)[0]),
  newQuoteText: languages[Object.keys(languages)[0]].newQuoteText,
  colors: getRandomColor(),
};

const dispatcher = (state, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        language: action.language,
        quote:
          action.language === state.language
            ? state.quote
            : getNewQuote(action.language),
        newQuoteText: languages[action.language].newQuoteText,
        colors: getRandomColor(),
      };
    case NEW_QUOTE:
      return {
        ...state,
        quote: getNewQuote(state.language),
        colors: getRandomColor(),
      };
    default:
      return state;
  }
};

export { initialState, dispatcher };
