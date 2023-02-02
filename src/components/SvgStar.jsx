import React from 'react'
import styled from 'styled-components'

const SvgStar = ({ backgroundColor, starColor, rate, nullColor }) => {
  const Test = styled.div`
    position: absolute;
    width: '162px';
    height: '30px';
    top: '100px';
    left: '100px';
  `

  const star = {
    position: 'relative',
    width: '162px',
    height: '100%',
  }

  const styles = {
    fill: backgroundColor,
  }
  const FillDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: ${starColor};
    //width: ${(props) => props.rate * 32.4}px;
    width: ${(props) => props.rate * 20}%;
    height: 30px;
  `

  return (
    <Test>
      <FillDiv rate={5} style={{ background: `${nullColor}` }}></FillDiv>
      <FillDiv rate={rate}></FillDiv>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 30" style={star}>
        <defs></defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              style={styles}
              d="M0,0V11.63l10.36-1.5L15,.73l4.64,9.4L30,11.63l-7.5,7.31,1.77,10.33L15,24.39,5.73,29.27,7.5,18.94,0,11.63V30H162V11.63l-7.5,7.31,1.77,10.33L147,24.39l-9.27,4.88,1.77-10.33L132,11.63l10.36-1.5L147,.73l4.64,9.4L162,11.63V0ZM57.27,29.27,48,24.39l-9.27,4.88L40.5,18.94,33,11.63l10.36-1.5L48,.73l4.64,9.4L63,11.63l-7.5,7.31Zm33,0L81,24.39l-9.27,4.88L73.5,18.94,66,11.63l10.36-1.5L81,.73l4.64,9.4L96,11.63l-7.5,7.31Zm33,0L114,24.39l-9.27,4.88,1.77-10.33L99,11.63l10.36-1.5L114,.73l4.64,9.4L129,11.63l-7.5,7.31Z"
            />
          </g>
        </g>
      </svg>
    </Test>
  )
}

export default SvgStar
