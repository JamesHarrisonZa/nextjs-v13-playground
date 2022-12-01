import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChartData, DoughnutChart } from './DoughnutChart';

const chartData: ChartData = {
  dataPoints: [
    {
      label: 'Wants',
      data: 1500,
      colour: 'blue',
    },
    {
      label: 'Saved',
      data: 1500,
      colour: 'red',
    },
    {
      label: 'Needs',
      data: 900,
      colour: 'orange',
    },
  ],
};

export default {
  component: DoughnutChart,
  title: 'Charts/DoughnutChart',
  args: {
    topText: 'Budget spent',
    midText: '$4,200',
    bottomText: 'of $ 5,400',
    chartData,
  },
} as ComponentMeta<typeof DoughnutChart>;

const Template: ComponentStory<typeof DoughnutChart> = (args) => (
  <DoughnutChart {...args} />
);

export const Default = Template.bind({});
