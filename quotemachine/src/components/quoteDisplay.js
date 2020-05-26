import React from "react";
import { connect } from "react-redux";
import "../App.css";

function Presentation(props) {
  console.log(props);
  const {
    quote: { text, author },
    colors: { textColor, backgroundColor },
    textFontFamily,
  } = props;
  return (
    <div className="quoteDisplay" style={{ backgroundColor: backgroundColor }}>
      <h1 style={{ color: textColor, fontFamily: textFontFamily }} id="text">
        {text}
      </h1>
      <span
        className="authorQuoteDisplay"
        style={{ color: textColor }}
        id="author"
      >
        {author}
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    colors: state.colors,
  };
};

const QuoteDisplay = connect(mapStateToProps, null)(Presentation);
export default QuoteDisplay;
