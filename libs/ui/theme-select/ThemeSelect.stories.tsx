import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeSelect } from './ThemeSelect';

export default {
  component: ThemeSelect,
  title: 'Navbar/ThemeSelect',
  args: {},
} as ComponentMeta<typeof ThemeSelect>;

const Template: ComponentStory<typeof ThemeSelect> = (args) => (
  <ThemeSelect {...args} />
);

export const Default = Template.bind({});
