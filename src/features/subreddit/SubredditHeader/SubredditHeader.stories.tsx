import React from 'react'
//import { Flair } from '@shared/components'
import SubredditHeader from './SubredditHeader'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MockRedux } from '@shared/components'
import { SubredditContext } from '../Subreddit/Subreddit'

const getDate = () => ''
const hasFlair = () => false

export default {
  title: 'Subreddit/SubredditHeader',
  component: SubredditHeader,
  decorators: [
    (SubredditHeader) => (
      <MockRedux>
        <SubredditContext.Provider value={{
          getDate, hasFlair, subreddit: 'Angular'
        }}>
          <SubredditHeader />
        </SubredditContext.Provider>
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof SubredditHeader>

const Template: ComponentStory<typeof SubredditHeader> = (args) => <SubredditHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  banner: 'https://mxnr.net/content/images/2020/01/1_Vc0m5dS9SlhieEbR6n8wFg.jpg',
  icon: 'https://svelte.gallerycdn.vsassets.io/extensions/svelte/svelte-vscode/105.17.0/1654201110722/Microsoft.VisualStudio.Services.Icons.Default',
  title: 'React',
  subscribed: true
}