import React, { Component } from "react";
import Header from "./components/Header";
import Navs from "./components/Navs";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import cards from "./cards.json";

const fullArray = cards;

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    cards,
    message: "Click an image to begin!"
  };

  componentDidMount() {}

  componentDidUpdate() {
    console.log(fullArray);
  }

  setClicked = id => {
    console.log(id);
    let cardClicked;
    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[id] === fullArray[i]) {
        cardClicked = fullArray[i];
        console.log(cardClicked);
      }
    }
    if (cardClicked.clicked) {
      console.log("fucked");
      this.testNewHighScore(this.state.currentScore);
      this.setState({ message: "Sorry, Game Over. Lets Try Again" });
      this.resetStats();
    } else {
      this.state.cards.map(card => {
        if (card.id === id) {
          card.clicked = true;
        }
      });

      // this.setState({ cards: newArray });

      this.incrementCurrentScore();
      // Wasn't able to implement this funtion without having some other bug or issue pop up
      // this.shuffle();
    }
  };

  shuffle = () => {
    this.state.cards.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  };

  testNewHighScore = score => {
    if (score > this.state.highScore) {
      this.setState({ highScore: score });
    }
  };

  incrementCurrentScore = () => {
    this.setState({
      currentScore: this.state.currentScore + 1
    });
    this.testIfWin();
  };

  testIfWin = () => {
    // console.log(this.state.currentScore);

    let displayMessage =
      this.state.currentScore === this.state.cards.length
        ? "Congrats, You Win!"
        : "Correct! Keep Going!";

    this.setState({ message: displayMessage });
  };

  resetStats = () => {
    this.setState(state => {
      state.cards.map(card => {
        card.clicked = false;
        return "nothing";
      });
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
    // const fullArray = cards;

    return (
      <Wrapper>
        <Navs
          score={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        ;
        <Header />;
        <div className="container">
          <div className="row 1">
            {this.state.cards.map(card => {
              return this.cardPropFunction(card);
            })}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
