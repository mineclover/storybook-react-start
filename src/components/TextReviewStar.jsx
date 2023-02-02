import { useEffect } from '@storybook/addons'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const StarWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NullStar = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '${(props) => (props.toggle ? '★' : '☆')}';
    position: absolute;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    ::before {
      //content: '${(props) => (props.toggle ? '☆' : '★')}';
      transform: scale(2);
      position: absolute;
      border: 1px solid ${(props) => (props.toggle ? 'blue' : 'red')};
    }
  }
`

const textReviewStar = (props) => {
  const [star, setStar] = useState(props.rate)
  const oldStar = useRef(star)
  console.log('oldStar.current', oldStar, oldStar.current)
  console.log('star', star)

  function StarGen(rate) {
    function tempOff(num) {
      oldStar.current = star
      setStar(num)
    }
    function tempLeave() {
      setStar(oldStar.current)
    }

    const starArr = []
    for (let i = 0; i < 5; i++) {
      if (i < star) {
        starArr.push(
          <NullStar
            key={i}
            toggle={true}
            onClick={() => setStar(i + 1)}
            onMouseLeave={() => {
              tempLeave(i + 1)
            }}
            onMouseEnter={() => {
              tempOff(i + 1)
            }}
          ></NullStar>
        )
      } else {
        starArr.push(
          <NullStar
            key={i}
            toggle={false}
            onClick={() => setStar(i + 1)}
            onMouseLeave={() => {
              tempLeave(i + 1)
            }}
            onMouseEnter={() => {
              tempOff(i + 1)
            }}
          ></NullStar>
        )
      }
    }
    return starArr
  }

  return <StarWarp>{StarGen(star)}</StarWarp>
}

export default textReviewStar
