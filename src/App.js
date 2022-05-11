import React, {Component} from 'react';
import quotes from './quotesDB';
import colors from './colorsDB';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      color: colors[0]
    }
      this.generateRandomQuotes = this.generateRandomQuotes.bind(this);
      this.shuffleQuotes = this.shuffleQuotes.bind(this);
  }
  // generate new quote
  generateRandomQuotes() {
    let num1 = Math.floor(Math.random() * quotes.length);
    let num2 = Math.floor(Math.random() * colors.length);
    this.setState({
      quote: quotes[num1].quote,
      author: quotes[num1].author,
      color: colors[num2]
    })

    // shuffle quotes, authors, colors
    this.shuffleQuotes(quotes);
    this.shuffleQuotes(colors);
  }

  shuffleQuotes = (arr) => {
    return arr.sort(() => {return 0.5 - Math.random();});
  }
    
  render() {
    const style = {
      backgroundColor: this.state.color,
      color: this.state.color
    }

    const style1 = {
      backgroundColor: this.state.color,
    }

    return (
      <div className="container" style={style}>
        <div className ="container_extra-contain">
          <div className="container_contain">
            <div className="container_contain-quote"><i class="fa fa-quote-left" aria-hidden="true"></i> {this.state.quote}</div> 
            <div className="container_contain-author">- {this.state.author}</div> 
            <div className="container_contain-button">
              <div className="left_button">
                <a target="_blank" title="Tweet this quote!" href="https://twitter.com/?logout=1652180701371tum"><div id="first_button" style={style1}><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></div></a>
                <a target="_blank" title="Post this quote on tumblr!" href="https://www.tumblr.com/explore/trending?source=homepage_explore"><div id="second_button" style={style1}><i class="fa fa-tumblr fa-2x" aria-hidden="true"></i></div></a>
              </div>
              <div className="right_button">
                <button id="third_button" type="submit" onClick = {this.generateRandomQuotes} style={style1}>New quote</button>
              </div>
            </div> 
          </div>
          <div className="container_author">by Minh Duc Nguyen</div>
        </div>
      </div> 
    );
  }
};

export default App;