import React from "react"
import SaveButton from "./SaveButton"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { MockRedux } from "@shared/components"

export default {
  title: 'Post/SaveButton',
  component: SaveButton,
  decorators: [
    (SaveButton) => (
      <MockRedux>
        <SaveButton />
      </MockRedux>
    )
  ]
} as ComponentMeta<typeof SaveButton>

const Template: ComponentStory<typeof SaveButton> = (args) => <SaveButton {...args} />

export const Saved = Template.bind({})
Saved.args = {
  saved: true,
  name: 'some name'
}

export const NotSaved = Template.bind({})
NotSaved.args = {
  saved: false,
  name: 'some name'
}