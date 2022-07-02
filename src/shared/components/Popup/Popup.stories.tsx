import React from 'react'
//import { Flair } from '@shared/components'
import Popup from './Popup'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HashRouter } from 'react-router-dom'

export default {
  title: 'Shared/Popup',
  component: Popup,
  decorators: [
    (Popup) => (
      <HashRouter>
        <Popup />
      </HashRouter>
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