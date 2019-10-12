import React, { Component } from "react";
import Header from "./components/Header";
import Navs from "./components/Navs";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import cards from "./cards.json";

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    card: cards
  };

  setClicked = id => {
    // Make sure you install axios using (npm install axios) in your terminal
    this.setState(state => {
      const cards = state.card.map(card => {
        if (card.id === id) {
          card.clicked = true;
        }
      });
      return {
        cards
      };
    });
    console.log(this.state.card[id].clicked);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Wrapper>
        <Navs />;
        <Header />;
        <div className="container">
          <div className="row 1">
            {this.state.card.map((card, i) => {
              if (i < 3) {
                return (
                  <Cards
                    id={card.id}
                    name={card.name}
                    image={card.image}
                    clicked={card.clicked}
                    setClicked={this.setClicked}
                  />
                );
              }
            })}
          </div>
          <div className="row 1">
            {this.state.card.map((card, i) => {
              if (i >= 3 && i < 6) {
                return (
                  <Cards
                    id={card.id}
                    name={card.name}
                    image={card.image}
                    clicked={card.clicked}
                    setClicked={this.setClicked}
                  />
                );
              }
            })}
          </div>
          <div className="row 1">
            {this.state.card.map((card, i) => {
              if (i >= 6) {
                return (
                  <Cards
                    id={card.id}
                    name={card.name}
                    image={card.image}
                    clicked={card.clicked}
                    setClicked={this.setClicked}
                  />
                );
              }
            })}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
