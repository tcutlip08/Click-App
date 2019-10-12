import React, { Component } from "react";
import Header from "./components/Header";
import Navs from "./components/Navs";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import cards from "./cards.json.js.js";

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    card: cards
  };
  render() {
    return (
      <Wrapper>
        <Navs />;
        <Header />;
        {this.state.card.map(card => (
          <Cards
            id={card.id}
            name={card.name}
            image={card.image}
            clicked={card.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
