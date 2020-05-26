import React from "react";
import { Provider, connect } from "react-redux";
import { store } from "./redux/store";
import QuoteDisplay from "./components/quoteDisplay";
import LangButton from "./components/langButton";
import NewQuoteButton from "./components/newQuoteButton";
import { Tweet } from "./components/tweet";
import { languages } from "./listOfQuotes/quoteConstants";
import "./App.css";

class Presentation extends React.Component {
  render() {
    console.log(this.props);
    const { fontFamily, backgroundColor } = {
      ...this.props,
    };
    return (
      <div className="App" style={{ backgroundColor: backgroundColor }}>
        <QuoteDisplay textFontFamily={fontFamily} />
        <div id="langRow">
          {Object.keys(languages).map((lang) => {
            return (
              <LangButton
                key={lang}
                text={languages[lang].text}
                langValue={lang}
              />
            );
          })}
        </div>
        <Tweet />
        <NewQuoteButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundColor: state.colors.backgroundColor,
  };
};

const ConnectedApp = connect(mapStateToProps, null)(Presentation);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp {...this.props} />
      </Provider>
    );
  }
}

export default App;
