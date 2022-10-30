import {ComponentMeta, ComponentStory} from '@storybook/react';

import { Button } from './Button'

export default {
  title: 'Components/Button',
  Component: Button,
  args: {
    children: 'Button',
    variant: 'filled',
    size: 'xs',
    color: 'primary'
  },
  argTypes: {
    variant: {
      options: ['filled', 'light','outline', 'default', 'subtle'],
      control: {type: 'select'}
    },
    color: {
      options: ['primary', 'secondary','neutral'],
      control: {type: 'select'}
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {type: 'select'}
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

