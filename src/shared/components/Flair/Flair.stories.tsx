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
  richtext: [
    { e: 'text', t: 'Text' }
  ]
}

export const WithBgcolor = Template.bind({})
WithBgcolor.args = {
  color: 'black',
  bgcolor: '#FFAD7A',
  richtext: [
    { e: 'text', t: 'Text' }
  ]
}

export const WithEmoji = Template.bind({})
WithEmoji.args = {
  color: 'dark',
  bgcolor: 'transparent',
  richtext: [
    { e: 'text', t: '- Right' },
    { a: ':rigth:', e: 'emoji', u: "https://emoji.redditmedia.com/x5otkjy5oar31_t5_3ipa1/right" }
  ]
}