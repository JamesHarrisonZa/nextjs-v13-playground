import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavBar } from './NavBar';

export default {
  component: NavBar,
  title: 'Navbar/NavBar',
  args: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
