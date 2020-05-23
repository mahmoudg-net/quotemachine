import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import QuoteDisplay from "./components/quoteDisplay";
import LangButton from "./components/langButton";
import NewQuoteButton from "./components/newQuoteButton";
import { languages } from "./listOfQuotes/quoteConstants";
import "./App.css";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { quote, fontFamily } = {
      ...this.props,
    };
    return (
      <div className="App">
        <QuoteDisplay quote={quote} textFontFamily={fontFamily} />
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
        <NewQuoteButton />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <Presentation {...this.props} />
      </Provider>
    );
  }
}

export default App;
