import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { newQuoteAction } from "../redux/actions";

function Presentation(props) {
  const { newQuoteText, textColor, displayNewQuote } = props;
  return (
    <button
      className="newQuoteButton"
      onClick={displayNewQuote}
      style={{ backgroundColor: textColor }}
    >
      {newQuoteText}
    </button>
  );
}

const mapStateToProps = (state) => {
  return { newQuoteText: state.newQuoteText };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayNewQuote: (lang) => {
      dispatch(newQuoteAction(lang));
    },
  };
};

const LangButton = connect(mapStateToProps, mapDispatchToProps)(Presentation);

export default LangButton;
