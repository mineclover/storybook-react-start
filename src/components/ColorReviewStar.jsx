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
  text-align: center;
  color: ${(props) => (props.toggle ? 'black' : '#ccc')};
  transform: scale(1);
  transition: all 0.5s;

  &:hover {
    color: ${(props) => (props.toggle ? 'red' : '#ccc')};
    transform: scale(2) rotateY(180deg);
  }
`

const textReviewStar = (props) => {
  const [star, setStar] = useState(3)
  const oldStar = useRef(star)
  console.log('oldStar.current', oldStar, oldStar.current)
  console.log('star', star)

  function StarGen(rate) {
    function tempOff(num) {
      setStar(num)
    }
    function tempLeave() {
      setStar(oldStar.current)
    }
    const starArr = []
    for (let i = 0; i < props.rate; i++) {
      if (i < star) {
        starArr.push(
          <NullStar
            key={i}
            toggle={true}
            onClick={() => (oldStar.current = i + 1)}
            onMouseLeave={() => {
              tempLeave(i + 1)
            }}
            onMouseEnter={() => {
              tempOff(i + 1)
            }}
          >
            ★
          </NullStar>
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
          >
            ★
          </NullStar>
        )
      }
    }
    return starArr
  }

  return <StarWarp>{StarGen(star)}</StarWarp>
}

export default textReviewStar
