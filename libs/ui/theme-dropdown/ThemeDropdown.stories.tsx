import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDropdown } from './ThemeDropdown';

export default {
  component: ThemeDropdown,
  title: 'Navbar/ThemeDropdown',
  args: {},
} as ComponentMeta<typeof ThemeDropdown>;

const Template: ComponentStory<typeof ThemeDropdown> = (args) => (
  <div className="flex justify-center">
    <ThemeDropdown {...args} />
  </div>
);

export const Default = Template.bind({});
