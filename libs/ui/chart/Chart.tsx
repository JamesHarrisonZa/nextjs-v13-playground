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

    const fontHeight = 40;

    ctx.font = `bolder ${fontHeight}px Arial`;
    ctx.fillStyle = 'rgba(255, 26, 104, 1)';
    ctx.textAlign = 'center';
    ctx.fillText('$4,200', width / 2, height / 2 + top);
    ctx.restore();

    ctx.font = `bolder ${fontHeight / 2}px Arial`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('of $ 5,400', width / 2, height / 2 + top + fontHeight);
    ctx.restore();
  },
};

export const Chart: React.FC = () => {
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
