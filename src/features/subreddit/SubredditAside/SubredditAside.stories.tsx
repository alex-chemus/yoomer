import React from 'react'
import SubredditAside from './SubredditAside'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SubredditContext } from '../Subreddit/Subreddit'
import { MockRedux } from '@shared/components'

const getDate = () => ''
const hasFlair = () => true

export default {
  title: 'Subreddit/SubredditAside',
  component: SubredditAside,
  decorators: [
    (SubredditAside) => (
      <MockRedux>
        <SubredditContext.Provider value={{
          getDate, hasFlair, subreddit: 'PCM'
        }}>
          <SubredditAside />
        </SubredditContext.Provider>
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof SubredditAside>

const Template: ComponentStory<typeof SubredditAside> = (args) => <SubredditAside {...args} />

export const Default = Template.bind({})
Default.args = {
  flair: {
    bgcolor: 'transparent',
    color: '#CF4F00',
    richtext: [
      { e: 'text', t: 'Hello' }
    ]
  },
  description: 'This is a mock data',
  subscribers: 10000,
  activeCount: 200
}