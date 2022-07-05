import React, { useRef } from 'react'
import ShowProfileSort from './ShowProfileSort'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Properties } from 'csstype'

const dyeSortButton = (s: string): Properties => {
  if (s === 'overview') return {
    backgroundColor: 'var(--accent-color)',
    color: 'var(--gray-0)'
  }
  return {
    backgroundColor: 'white',
    color: 'black'
  }
}

export default {
  title: 'Profile/ShowProfileSort',
  component: ShowProfileSort,
  argTypes: {
    changeSort: { action: 'change sort' },
    slide: { action: 'slide' }
  }
} as ComponentMeta<typeof ShowProfileSort>

const Template: ComponentStory<typeof ShowProfileSort> = (args) => <ShowProfileSort {...args} />

export const NotMe = Template.bind({})
NotMe.args = {
  isMe: false,
  dyeSortButton
}

export const Me = Template.bind({})
Me.args = {
  isMe: true,
  dyeSortButton
}