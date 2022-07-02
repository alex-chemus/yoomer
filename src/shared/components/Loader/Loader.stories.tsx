import React from 'react'
//import { Flair } from '@shared/components'
import Loader from './Loader'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Shared/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})