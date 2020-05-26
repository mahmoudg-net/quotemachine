import React from "react";
import { connect } from "react-redux";

const Presentation = (props) => {
  const { text } = { ...props };
  const url = `https://twitter.com/intent/tweet?text=${encodeURI(text)}`;
  return (
    <a
      className="twitter-share-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-size="large"
      id="tweet-quote"
    >
      <i className="fa fa-twitter fa-lg">Tweet</i>
    </a>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.quote.text,
  };
};

export const Tweet = connect(mapStateToProps, null)(Presentation);
