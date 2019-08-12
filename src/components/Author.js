import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export default function Author (props) {
  return (
    <S.AuthorBox 
      id="author"
      color={props.color}
      animationTime={props.animationTime}
      >
      <S.Text
        fade={props.fade}
        animationTime={props.animationTime}
        >
        - {props.author}
      </S.Text>
    </S.AuthorBox>
  )
}

const S = {}
  
S.AuthorBox= styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.color};
  font-size: 20px;
  padding: 20px 50px 30px;
  flex-basis: 12.5%;
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