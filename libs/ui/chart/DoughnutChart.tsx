import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData as ChartJsData,
  Plugin,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DataPoint {
  label: string;
  data: number;
  colour: string;
}

export interface ChartData {
  dataPoints: DataPoint[];
}

// https://www.chartjs.org/docs/latest/charts/doughnut.html
const getMappedChartJsData = (
  chartData: ChartData
): ChartJsData<'doughnut', number[], string> => {
  const labels = chartData.dataPoints.map((d) => d.label);
  const data = chartData.dataPoints.map((d) => d.data);
  const colours = chartData.dataPoints.map((d) => d.colour);

  return {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colours,
        hoverOffset: 4,
      },
    ],
  };
};

const getTextColourMatchingClass = (
  className: string,
  fallbackColour: string
) => {
  const htmlMatchingPrimaryText = document.querySelector(className);

  return htmlMatchingPrimaryText
    ? window.getComputedStyle(htmlMatchingPrimaryText).color
    : fallbackColour;
};

// https://www.youtube.com/watch?v=_7w52T9aemo
const getStackedText = (
  topText: string,
  midText: string,
  bottomText: string
): Plugin<'doughnut', {}> => ({
  id: 'stackedText',
  afterDatasetsDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;
    ctx.save();

    const midFontHeight = 40;
    const subFontHeight = 15;

    const primaryTextColour = getTextColourMatchingClass(
      '.text-primary',
      'grey'
    );
    const secondaryTextColour = getTextColourMatchingClass(
      '.text-secondary',
      'black'
    );

    // Top text
    ctx.font = `bolder ${subFontHeight}px Arial`;
    ctx.fillStyle = secondaryTextColour;
    ctx.textAlign = 'center';
    ctx.fillText(topText, width / 2, height / 2 + top - midFontHeight);
    ctx.restore();

    // Mid text
    ctx.font = `bolder ${midFontHeight}px Arial`;
    ctx.fillStyle = primaryTextColour;
    ctx.textAlign = 'center';
    ctx.fillText(midText, width / 2, height / 2 + top + subFontHeight);
    ctx.restore();

    // Bottom text
    ctx.font = `bolder ${subFontHeight}px Arial`;
    ctx.fillStyle = secondaryTextColour;
    ctx.textAlign = 'center';
    ctx.fillText(bottomText, width / 2, height / 2 + top + midFontHeight);
    ctx.restore();
  },
});

export interface DoughnutChartProps {
  topText: string;
  midText: string;
  bottomText: string;
  chartData: ChartData;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
  topText,
  midText,
  bottomText,
  chartData,
}) => {
  const stackedText = getStackedText(topText, midText, bottomText);
  const chartJsData = getMappedChartJsData(chartData);

  return (
    <div className="max-h-64">
      <p className="text-primary" /> {/* Here to grab the primary colour */}
      <p className="text-secondary" /> {/* Here to grab the secondary colour */}
      <Doughnut
        height="250"
        data={chartJsData}
        options={{
          maintainAspectRatio: false,
          cutout: '80%',
          plugins: { legend: { align: 'center', position: 'right' } },
        }}
        plugins={[stackedText]}
      />
    </div>
  );
};
