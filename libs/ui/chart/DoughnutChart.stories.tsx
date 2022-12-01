import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DoughnutChart } from './DoughnutChart';

export default {
  component: DoughnutChart,
  title: 'Charts/DoughnutChart',
  args: {},
} as ComponentMeta<typeof DoughnutChart>;

const Template: ComponentStory<typeof DoughnutChart> = (args) => (
  <DoughnutChart {...args} />
);

export const Default = Template.bind({});
