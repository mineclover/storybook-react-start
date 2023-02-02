import React from 'react'

import ColorReviewStar from './ColorReviewStar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Test/ColorReviewStar',
  component: ColorReviewStar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    rate: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ColorReviewStar {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  rate: 3,
}
