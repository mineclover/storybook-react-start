import React from 'react'

import SvgReview from './SvgReview'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SvgReview',
  component: SvgReview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    starColor: { control: 'color' },
    nullColor: { control: 'color' },
    rate: { control: { type: 'range', min: 0, max: 5, step: 0.1 } },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SvgReview {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  rate: 3,
  backgroundColor: '#fff',
  starColor: '#f00',
  nullColor: '#ccc',
}
