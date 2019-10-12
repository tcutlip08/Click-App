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

  componentDidMount() {}

  setClicked = id => {
    // Make sure you install axios using (npm install axios) in your terminal
    if (this.state.card[id].clicked) {
      console.log("You fuckin lose");
      this.resetStats(cards);
    } else {
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
    }
    this.setState({ currentScore: this.state.currentScore + 1 });
    console.log(this.state.currentScore);
  };

  resetStats = cards => {
    this.setState(state => {
      const cards = state.card.map(card => {
        card.clicked = false;
      });
      return {
        cards
      };
    });
    this.setState({ currentScore: 0 });
    console.log("Reset Func..");
  };

  cardPropFunction = card => {
    return (
      <Cards
        id={card.id}
        key={card.id}
        name={card.name}
        image={card.image}
        clicked={card.clicked}
        setClicked={this.setClicked}
      />
    );
  };

  render() {
    return (
      <Wrapper>
        <Navs
          score={this.state.currentScore}
          highScore={this.state.highScore}
        />
        ;
        <Header />;
        <div className="container">
          <div className="row 1">
            {this.state.card.map((card, i) => {
              return this.cardPropFunction(card);
            })}
          </div>
          {/* {this.state.card.map((res, i) => {
            if (i === 0) {
              return (
                <div className={`row${i + 1}`} key={i}>
                  {this.state.card.map((card, j) => {
                    if (j < 3) {
                      return this.cardPropFunction(card);
                    }
                  })}
                </div>
              );
            } else if (i === 1) {
              return (
                <div className={`row${i + 1}`} key={i}>
                  {this.state.card.map((card, j) => {
                    if (j >= 3 && j < 6) {
                      return this.cardPropFunction(card);
                    }
                  })}
                </div>
              );
            } else {
              return (
                <div className={`row${i + 1}`} key={i}>
                  {this.state.card.map((card, j) => {
                    if (j >= 6) {
                      return this.cardPropFunction(card);
                    }
                  })}
                </div>
              );
            }
          })} */}
          {/* <div className="row 1">
            {this.state.card.map((card, i) => {
              if (i < 3) {
                return (
                  <Cards
                    id={card.id}
                    key={card.id}
                    name={card.name}
                    image={card.image}
                    clicked={card.clicked}
                    setClicked={this.setClicked}
                  />
                );
              }
            })}
          </div> */}
          {/* <div className="row 2">
            {this.state.card.map((card, i) => {
              if (i >= 3 && i < 6) {
                return (
                  <Cards
                    id={card.id}
                    key={card.id}
                    name={card.name}
                    image={card.image}
                    clicked={card.clicked}
                    setClicked={this.setClicked}
                  />
                );
              }
            })}
          </div>
          <div className="row 3">
            {this.state.card.map((card, i) => {
              if (i >= 6) {
                return (
                  <Cards
                    id={card.id}
                    key={card.id}
                    name={card.name}
                    image={card.image}
                    clicked={card.clicked}
                    setClicked={this.setClicked}
                  />
                );
              }
            })}
          </div> */}
        </div>
      </Wrapper>
    );
  }
}

export default App;
