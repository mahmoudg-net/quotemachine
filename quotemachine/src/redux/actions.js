export const SET_LANGUAGE = "SET_LANGUAGE";
export const NEW_QUOTE = "DISPLAY_NEW_QUOTE";

export const setLanguageAction = language => {
  return {
    type: SET_LANGUAGE,
    language
  };
};

export const newQuoteAction = () => {
  return {
    type: NEW_QUOTE
  };
};
