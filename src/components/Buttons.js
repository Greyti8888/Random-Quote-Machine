import React from 'react'
import styled from 'styled-components'

import TweetQuote from './TweetQuote'
import NewQuote from './NewQuote'

export default function Buttons (props) {
  return (
    <S.Buttons id="buttons">
      <TweetQuote 
        quote={props.quote}
        author={props.author}
        bgColor={props.color}
        animationTime={props.animationTime}
      />
      <NewQuote 
        handleClick={props.handleClick}
        disabled={props.disableNewQuote}
        bgColor={props.color}
        animationTime={props.animationTime}
      />
    </S.Buttons>
  )
}

const S = {}

S.Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px 30px;
  flex-basis: 12.5%;
  border-radius: 0 0 5px 5px;
  background-color: white;
`