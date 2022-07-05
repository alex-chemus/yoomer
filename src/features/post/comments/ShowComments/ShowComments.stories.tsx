import React, { FC, useState } from 'react'
import ShowComments from './ShowComments'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ICommentSort } from '../types'
import { MockRedux } from '@shared/components'
import { MemoryRouter } from 'react-router-dom'

function withSort(Component: FC<any>) {
  return (props: any) => {
    const [sort, setSort] = useState<ICommentSort>('top')

    return <Component sort={sort} setSort={setSort} {...props} />
  }
}

const NewShowComments = withSort(ShowComments)

export default {
  title: 'Comments/ShowComments',
  component: ShowComments,
  decorators: [
    (NewShowComments) => (
      <MockRedux>
        <MemoryRouter>
          <NewShowComments />
        </MemoryRouter>
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof ShowComments>

const Template: ComponentStory<typeof ShowComments> = (args) => <NewShowComments {...args} />

export const Default = Template.bind({})
Default.args = {
  more: null,
  link: '',
  token: '',
  comments: [
    {
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
    },
    {
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
  ]
}