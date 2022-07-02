import React from 'react'
//import { Flair } from '@shared/components'
import VoteBtn from './VoteBtn'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Shared/VoteBtn',
  component: VoteBtn,
  argTypes: {
    onClick: {
      action: 'clicked'
    },
  }
} as ComponentMeta<typeof VoteBtn>

const Template: ComponentStory<typeof VoteBtn> = (args) => <VoteBtn {...args} />

export const Default = Template.bind({})
Default.args = {
  likes: 1,
  check: null,
  bgcolor: 'transparent'
}

export const Upvote = Template.bind({})
Upvote.args = {
  likes: 1,
  check: true,
  bgcolor: 'transparent'
}

export const Downvote = Template.bind({})
Downvote.args = {
  likes: -1,
  check: false,
  bgcolor: 'transparent'
}