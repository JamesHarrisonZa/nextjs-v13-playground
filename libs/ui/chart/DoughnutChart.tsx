import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  Plugin,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// https://www.chartjs.org/docs/latest/charts/doughnut.html
const data: ChartData<'doughnut', number[], string> = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    },
  ],
};

// https://www.youtube.com/watch?v=_7w52T9aemo
const stackedText: Plugin<'doughnut', {}> = {
  id: 'stackedText',
  afterDatasetsDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;
    ctx.save();

    const midFontHeight = 40;
    const subFontHeight = 15;

    const topText = 'Budget spent';
    ctx.font = `bolder ${subFontHeight}px Arial`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(topText, width / 2, height / 2 + top - midFontHeight);
    ctx.restore();

    const midText = '$4,200';
    ctx.font = `bolder ${midFontHeight}px Arial`;
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.textAlign = 'center';
    ctx.fillText(midText, width / 2, height / 2 + top);
    ctx.restore();

    const bottomText = 'of $ 5,400';
    ctx.font = `bolder ${subFontHeight}px Arial`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(bottomText, width / 2, height / 2 + top + midFontHeight);
    ctx.restore();
  },
};

export interface DoughnutChartProps {}

export const DoughnutChart: React.FC<DoughnutChartProps> = () => {
  return (
    <>
      <Doughnut
        height="250"
        data={data}
        options={{ maintainAspectRatio: false, cutout: '80%' }}
        plugins={[stackedText]}
      />
    </>
  );
};
