import {ComponentMeta, ComponentStory} from '@storybook/react';

import { Button } from './Button'

export default {
  title: 'Components/Button',
  Component: Button,
  args: {
    children: 'Button',
    variant: 'filled'
  },
  argTypes: {
    variant: {
      options: ['filled', 'light','outline', 'default', 'subttle'],
      control: {type: 'radio'}
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})