import { SET_LANGUAGE, NEW_QUOTE } from "./actions";
import { languages, getNewQuote } from "../listOfQuotes/quoteConstants";

const initialState = {
  language: languages[0].value,
  quote: getNewQuote(languages[0].value)
};

const dispatcher = (state, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        language: action.language,
        quote:
          action.language === state.language
            ? state.quote
            : getNewQuote(action.language)
      };
    case NEW_QUOTE:
      return {
        ...state,
        quote: getNewQuote(state.language)
      };
    default:
      return state;
  }
};

export { initialState, dispatcher };
