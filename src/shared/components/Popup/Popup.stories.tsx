import React from 'react'
//import { Flair } from '@shared/components'
import Popup from './Popup'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Shared/Popup',
  component: Popup,
  decorators: [
    (Popup) => (
      <MemoryRouter>
        <Popup />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof Popup>

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />

export const Empty = Template.bind({})
Empty.args = {
  icon: undefined,
  karma: undefined,
  name: undefined
}

export const WithData = Template.bind({})
WithData.args = {
  icon: '',
  karma: 234,
  name: 'bazoslav'
}