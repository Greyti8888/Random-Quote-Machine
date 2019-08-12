import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function TweetQuote (props) { 
  return (
    <a 
      id="tweet-quote"
      href={`https://twitter.com/intent/tweet?text="${props.quote}" -${props.author}`} 
      target="_blank"
      rel="noopener noreferrer"
      >
      <S.TweetButton
        bgColor={props.bgColor}
        animationTime={props.animationTime}
        >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </S.TweetButton>
    </a>
  )
}

const S = {}

S.TweetButton = styled.i`
  color: ${props => props.bgColor};
  height: 35px;
  font-size: 35px;
  background-color: white;
  transition: color ${props => props.animationTime}ms;
`