import React from 'react'
import CommentField from './CommentField'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MockRedux } from '@shared/components'

export default {
  title: 'Comments/CommentField',
  component: CommentField,
  argTypes: {
    onSubmit: { action: 'submit' }
  },
  decorators: [
    (CommentField) => (
      <MockRedux>
        <CommentField />
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof CommentField>

const Template: ComponentStory<typeof CommentField> = (args) => <CommentField {...args} />

export const Default = Template.bind({})
Default.args = {
  id: '123423479o01267'
}