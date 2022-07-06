import React from 'react'
import ShowSubreddit from './ShowSubreddit'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MockRedux } from '@shared/components'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Subreddit/ShowSubreddit',
  component: ShowSubreddit,
  decorators: [
    (ShowSubreddit) => (
      <MockRedux>
        <MemoryRouter>
          <ShowSubreddit />
        </MemoryRouter>
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof ShowSubreddit>

const Template: ComponentStory<typeof ShowSubreddit> = (args) => <ShowSubreddit {...args} />

export const NoData = Template.bind({})
NoData.args = {
  data: undefined
}