import React from "react";
import { connect } from "react-redux";
import { setLanguageAction } from "../redux/actions";
import "../App.css";

function Presentation(props) {
  const { langValue, language, text, textColor, setLanguage } = { ...props };
  console.log(props);

  return (
    <button
      className="langButton"
      style={{
        backgroundColor: textColor,
        opacity: langValue === language ? 1 : 0.5,
      }}
      onClick={() => setLanguage(langValue)}
    >
      {text}
    </button>
  );
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (language) => {
      console.log(language);
      dispatch(setLanguageAction(language));
    },
  };
};

const LangButton = connect(mapStateToProps, mapDispatchToProps)(Presentation);

export default LangButton;
