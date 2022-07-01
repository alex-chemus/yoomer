import React from 'react'
//import { Flair } from '@shared/components'
import Flair from './Flair'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Shared/Flair',
  component: Flair,
} as ComponentMeta<typeof Flair>

const Template: ComponentStory<typeof Flair> = (args) => <Flair {...args} />

export const Default = Template.bind({})
Default.args = {
  bgcolor: 'transparent',
  color: 'red', // arbitrary color
  richtext: []
}