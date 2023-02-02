import React from 'react'
import Sample from './SvgStar'
// 6.5

export default {
  title: 'test/Sample',
  component: Sample,
}

const Template = (args) => <Sample {...args} />

export const Primary = Template.bind({})
Primary.args = {}
