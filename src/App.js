import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Quote from './components/Quote'
import Author from './components/Author'
import Buttons from './components/Buttons'

export default class App extends React.Component { 
  state = {
    quotes: "",
    quoteText: "",
    quoteAuthor: "",
    mainColor: "white",
    fade: false,
    disableNewQuote: false,
    animationTime: 1500,
  }
  
  componentDidMount() {
    document.body.style.margin = 0
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => {
      this.setState({
        quotes: res.data.quotes,
      });
    })
    .catch(error => {
      console.log(`Error: ${error}`)
    })
    .then(() => {
      this.getRandomQuote()
      this.getColor()
    })
    
  };

  handleClick = () => {
    this.setState({
      fade: true,
      disableNewQuote: true,
    })
    this.getColor();
    setTimeout(() => {
      this.getRandomQuote(); 
    }, this.state.animationTime / 2)
    setTimeout(() => {
      this.setState({
        fade: false,
        disableNewQuote: false,
      })
    }, this.state.animationTime)
  }

  handleFade = () => {
    this.setState({
      fade: !this.state.fade,
      disableNewQuote: !this.state.disableNewQuote,
    })
  }

  getRandomQuote = () => {
    let randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({ 
      quoteText: randomQuote.quote,
      quoteAuthor: randomQuote.author,
    })
  }
  
  getColor = () => {
    let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    this.setState({
      mainColor: randomColor
    })
  }
  
  render() {
    return (
      
      <S.Background 
        bgColor={this.state.mainColor}
        fade={this.state.fade}
        animationTime={this.state.animationTime}
        >
        <S.QuoteBox 
          id="quote-box"
          bgColor={this.state.mainColor}
          >
          <Quote 
            quote={this.state.quoteText} 
            color={this.state.mainColor}
            fade={this.state.fade}
            animationTime={this.state.animationTime}
            onAnimationEnd={() => this.setState({
              fade: false,
              disableNewQuote: false,
            })}
          />
          <Author 
            author={this.state.quoteAuthor}
            color={this.state.mainColor}
            fade={this.state.fade}
            animationTime={this.state.animationTime}
          />
          <Buttons 
            quote={this.state.quoteText}
            author={this.state.quoteAuthor}
            handleClick={this.handleClick}
            disableNewQuote={this.state.disableNewQuote}
            color={this.state.mainColor}
            fade={this.state.fade}
            animationTime={this.state.animationTime}
          />
        </S.QuoteBox>
      </S.Background>
    )
  }
}

const S = {}

S.Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
  transition: background-color ${props => props.animationTime}ms;
`

S.QuoteBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
`