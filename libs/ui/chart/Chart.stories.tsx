import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chart } from './Chart';

export default {
  component: Chart,
  title: 'ui/Chart',
  args: {},
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});
