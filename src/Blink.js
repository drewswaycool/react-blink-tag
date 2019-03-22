import React from 'react';

/** @jsx jsx */
import { css, keyframes, jsx } from '@emotion/core'

function Blink(props) {
  const { children, fade } = props;

  let { speed } = props;
  let blink;
  switch(speed) {
    case 'fast':
      speed = '.2s'
      break;
    case 'slow':
      speed = '1.3s'
      break;
    default:
      speed = '.8s'
  }


  if (fade === true) {
    blink = keyframes`
      0% { opacity: 0; }
      50% { opacity: 1 }
      100% { opacity: 0; }
    `
  } else {
    blink = keyframes`
    0% { visibility: hidden; }
    50% { visibility: hidden; }
    100% { visibility: visible; }
  `
  }

  return (
    <p css={css`animation: ${blink} ${speed} infinite;`}>
    {children}
    </p>
  )
}

export default Blink