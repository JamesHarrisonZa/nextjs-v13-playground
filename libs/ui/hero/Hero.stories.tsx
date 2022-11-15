import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Hero } from './Hero';

export default {
  component: Hero,
  title: 'ui/Hero',
  args: {},
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
