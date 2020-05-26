import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { newQuoteAction } from "../redux/actions";

function Presentation(props) {
  const {
    newQuoteText,
    colors: { textColor, backgroundColor },
    displayNewQuote,
  } = props;
  return (
    <button
      className="newQuoteButton btn btn-primary"
      onClick={displayNewQuote}
      style={{
        backgroundColor: textColor,
        color: backgroundColor,
      }}
      id="new-quote"
    >
      {newQuoteText}
    </button>
  );
}

const mapStateToProps = (state) => {
  return { newQuoteText: state.newQuoteText, colors: state.colors };
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
