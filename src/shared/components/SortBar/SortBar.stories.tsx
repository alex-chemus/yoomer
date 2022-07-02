import React from 'react'
//import { Flair } from '@shared/components'
import SortBar from './SortBar'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Shared/SortBar',
  component: SortBar,
  argTypes: {
    changeSort: {
      action: 'changeSort'
    }
  }
} as ComponentMeta<typeof SortBar>

const Template: ComponentStory<typeof SortBar> = (args) => <SortBar {...args} />

export const Default = Template.bind({})
Default.args = {
  sort: 'best'
}