import React from "react";
import "./App.css";

function QuoteDisplay(props) {
  const {
    quote: { text, author },
    textColor,
    textFontFamily
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

function LangButton(props) {
  const { text, isClicked, textColor, setLanguage } = { ...props };
  console.log(props);

  return (
    <button
      className="langButton"
      style={{ backgroundColor: textColor, opacity: isClicked ? 1 : 0.5 }}
      onClick={setLanguage}
    >
      {text}
    </button>
  );
}

function NewQuoteButton(props) {
  const { text, textColor, displayNewQuote } = props;
  return (
    <button
      className="newQuoteButton"
      onClick={displayNewQuote}
      style={{ backgroundColor: textColor }}
    >
      {text}
    </button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      textColor,
      textFontFamily,
      languages,
      currentLang,
      setLanguage,
      newQuoteText,
      displayNewQuote
    } = { ...this.props };
    const quoteDisplayContent = {
      text: "Aide toi, DIEU t'aidera",
      author: "Chai pas"
    };
    return (
      <div className="App">
        <QuoteDisplay
          quote={quoteDisplayContent}
          textColor={textColor}
          textFontFamily={textFontFamily}
        />
        <div id="langRow">
          {languages.map(lang => {
            return (
              <LangButton
                text={lang.text}
                value={lang.value}
                textColor={textColor}
                isClicked={lang.value === currentLang}
                changeLangAction={setLanguage}
              />
            );
          })}
        </div>
        <NewQuoteButton
          text={newQuoteText}
          textColor={textColor}
          displayNewQuote={displayNewQuote}
        />
      </div>
    );
  }
}

export default App;
