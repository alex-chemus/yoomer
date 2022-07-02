import React from 'react'
//import { Flair } from '@shared/components'
import ShowRules from './ShowRules'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Subreddit/ShowRules',
  component: ShowRules,
  argTypes: {
    toggleRule: { action: 'toggle rule' }
  }
} as ComponentMeta<typeof ShowRules>

const Template: ComponentStory<typeof ShowRules> = (args) => <ShowRules {...args} />

const getRules = (n: number) => {
  const arr = []
  for (let i=0; i<n; i++)
    arr.push({
      short_name: 'Morbius',
      description_html: `<p>Minions: The Rise of Gru
      </p>`
    })
  return arr
}

export const Default = Template.bind({})
Default.args = {
  rules: getRules(5)
}