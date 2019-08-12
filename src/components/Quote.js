import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export default function Quote(props) {
  return (
    <S.QuoteBox
      id="text"
      color={props.color}
      animationTime={props.animationTime}
    >
      <S.Text
        fade={props.fade}
        animationTime={props.animationTime}
      >
        {props.quote}
      </S.Text>
    </S.QuoteBox>
  )
}

const S = {}

S.QuoteBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
    font-size: 30px;
    padding: 40px 50px 0px;
    flex-basis: 75%;
    border-radius: 5px 5px 0 0;
    background-color: white;
    transition: color ${props => props.animationTime}ms;
`

const fadeOutIn = keyframes`
    0% {opacity: 1;}
    50% {opacity: 0;}
    100% {opacity: 1;}
`

S.Text = styled.p`
    margin: 0;
    ${props => props.fade ? css`animation: ${fadeOutIn} ${props => props.animationTime}ms linear forwards` : ''};
`