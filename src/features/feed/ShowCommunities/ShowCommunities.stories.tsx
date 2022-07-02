import React from 'react'
//import { Flair } from '@shared/components'
import ShowCommunities from './ShowCommunities'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Feed/ShowCommunities',
  component: ShowCommunities,
  decorators: [
    (ShowCommunities) => (
      <MemoryRouter>
        <div style={{width: '250px'}}>
          <ShowCommunities />
        </div>
      </MemoryRouter>
    )
  ],
  argTypes: {
    fetchSubs: {
      action: 'fetchSubs'
    },
  },
} as ComponentMeta<typeof ShowCommunities>

const Template: ComponentStory<typeof ShowCommunities> = (args) => <ShowCommunities {...args} />

const getSubs = (n: number) => {
  const arr = []
  for (let i=0; i<n; i++)
    arr.push({
      name: 'Obamium',
      icon: 'https://cdn.frankerfacez.com/emoticon/392391/4'
      //icon: ''
    })
  return arr
}

export const ShouldNotEnd = Template.bind({})
ShouldNotEnd.args = {
  isAll: false,
  subreddits: getSubs(25)
}

export const ShouldEnd = Template.bind({})
ShouldEnd.args = {
  isAll: true,
  subreddits: getSubs(25)
}