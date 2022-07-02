import React from 'react'
//import { Flair } from '@shared/components'
import ShowSearch from './ShowSearch'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Feed/ShowSearch',
  component: ShowSearch,
  argTypes: {
    clear: { action: 'clear' },
    searchSubs: { action: 'search subs' },
    setInput: { action: 'set input' }
  }
} as ComponentMeta<typeof ShowSearch>

const Template: ComponentStory<typeof ShowSearch> = (args) => <ShowSearch {...args} />

export const Default = Template.bind({})
Default.args = {
  popupData: [],
  input: ''
}