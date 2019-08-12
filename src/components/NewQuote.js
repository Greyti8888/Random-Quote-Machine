import React from 'react'
import styled from 'styled-components'

export default function NewQuote (props) {
  return (
    <S.NewQuoteButton
      id="new-quote"
      disabled={props.disabled}
      onClick={props.handleClick}
      bgColor={props.bgColor}
      animationTime={props.animationTime}
      >
      New Quote
    </S.NewQuoteButton>
  )
}

const S = {}

S.NewQuoteButton = styled.button`
  color: white;
  border: none;
  border-radius: 3px;
  height: 35px;
  background-color: ${props => props.bgColor};
  transition: background-color ${props => props.animationTime}ms;
`