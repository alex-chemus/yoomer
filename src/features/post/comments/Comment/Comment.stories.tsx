import React from 'react'
import Comment from './Comment'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MockRedux } from '@shared/components'

export default {
  title: 'Comments/Comment',
  component: Comment,
  argTypes: {
    onSubmit: { action: 'submit' }
  },
  decorators: [
    (Comment) => (
      <MockRedux>
        <Comment />
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const Default = Template.bind({})
Default.args = {
  data: {
    data: {
      author_flair_background_color: '#fff',
      author_flair_text_color: '#000',
      author_flair_richtext: [
        { e: 'text', t: 'Hoba' } 
      ],
      body_html: '<p> asdf </p>',
      name: 'Say, Nigger',
      parent_id: 'N****r',
      replies: null,
      author: 'Sarych',
      body: 'asdf',
      likes: true
    },
    kind: 't1'
  }
}