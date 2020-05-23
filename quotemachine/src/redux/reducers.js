import { SET_LANGUAGE, NEW_QUOTE } from "./actions";
import { languages, getNewQuote } from "../listOfQuotes/quoteConstants";

const initialState = {
  language: Object.keys(languages)[0],
  quote: getNewQuote(Object.keys(languages)[0]),
  newQuoteText: languages[Object.keys(languages)[0]].newQuoteText,
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
      };
    case NEW_QUOTE:
      return {
        ...state,
        quote: getNewQuote(state.language),
      };
    default:
      return state;
  }
};

export { initialState, dispatcher };
