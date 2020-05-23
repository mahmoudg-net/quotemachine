import React from "react";
import { connect } from "react-redux";
import { setLanguageAction } from "../redux/actions";
import "../App.css";

function Presentation(props) {
  const {
    langValue,
    language,
    text,
    colors: { textColor, backgroundColor },
    setLanguage,
  } = { ...props };

  return (
    <button
      className="langButton"
      style={{
        backgroundColor: textColor,
        color: backgroundColor,
        opacity: langValue === language ? 1 : 0.5,
      }}
      onClick={() => setLanguage(langValue)}
    >
      {text}
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    colors: state.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (language) => {
      dispatch(setLanguageAction(language));
    },
  };
};

const LangButton = connect(mapStateToProps, mapDispatchToProps)(Presentation);

export default LangButton;
