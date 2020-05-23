import React from "react";
import { connect } from "react-redux";
import "../App.css";

function Presentation(props) {
  console.log(props);
  const {
    quote: { text, author },
    textColor,
    textFontFamily,
  } = props;
  return (
    <div className="quoteDisplay">
      <h1
        className="textQuoteDisplay"
        style={{ color: textColor, fontFamily: textFontFamily }}
      >
        {text}
      </h1>
      <br />
      <span className="authorQuoteDisplay">{author}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { quote: state.quote };
};

const QuoteDisplay = connect(mapStateToProps, null)(Presentation);
export default QuoteDisplay;
