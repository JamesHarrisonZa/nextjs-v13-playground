import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDropdown } from './ThemeDropdown';

export default {
  component: ThemeDropdown,
  title: 'Navbar/ThemeDropdown',
  args: {},
} as ComponentMeta<typeof ThemeDropdown>;

const Template: ComponentStory<typeof ThemeDropdown> = (args) => (
  <ThemeDropdown {...args} />
);

export const Default = Template.bind({});
