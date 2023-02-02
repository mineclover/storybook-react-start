import React from 'react'
import styled from 'styled-components'
import Restar from './SvgStar'

const SvgReview = ({ backgroundColor, starColor, nullColor, ...props }) => {
  return (
    <Restar backgroundColor={backgroundColor} starColor={starColor} nullColor={nullColor} rate={props.rate}>
      SvgReview
    </Restar>
  )
}

export default SvgReview
