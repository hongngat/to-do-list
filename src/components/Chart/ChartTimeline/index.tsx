import { useState } from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
  VictoryTooltip,
  createContainer,
} from 'victory';
import { VictoryChartWrapper } from '../styled';
import { VictoryVoronoiContainerProps } from 'victory-voronoi-container';
import { VictoryZoomContainerProps } from 'victory-zoom-container';

const VictoryZoomVoronoiContainer = createContainer<
  VictoryVoronoiContainerProps,
  VictoryZoomContainerProps
>('zoom', 'voronoi');

interface ValueData {
  x?: any;
  y?: any;
  y0?: any;
}
const ChartTimeline = (props: any) => {
  const [zoom, setZoom] = useState({});
  const handleZoom = (domain: any) => {
    setZoom({ domain });
  };
  const dataChart = props.data.map((item: any) => {
    return {
      ...item,
      x: item.name,
      y: item.date_to == null ? new Date().getFullYear() : item.date_to,
      y0: item.date_from,
    };
  });
  return (
    <VictoryChartWrapper.Box>
      <VictoryChart
        horizontal
        height={200}
        domainPadding={{ x: 20 }}
        padding={{ left: 80, bottom: 30, top: 30, right: 30 }}
        containerComponent={
          <VictoryZoomVoronoiContainer
            responsive={true}
            zoomDimension="y"
            zoomDomain={zoom}
            onZoomDomainChange={handleZoom.bind(this)}
            voronoiDimension="y"
            labels={({ datum }) => `${datum.x}
            Start date: ${datum.y0}
            End date: ${datum.y}
            status: ${datum.status.status_uuid}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                dx={0}
                centerOffset={{ y: -30, x: -80 }}
                flyoutStyle={{ fill: '#000' }}
                pointerOrientation="bottom"
                flyoutPadding={({ text }) =>
                  text.length > 1 ? { top: 0, bottom: 0, left: 0, right: 0 } : 0
                }
              />
            }
          />
        }
      >
        <VictoryBar
          data={dataChart}
          labels={({ datum }) => datum.x}
          labelComponent={<VictoryLabel dx={-50} />}
          animate={{
            duration: 4000,
            onLoad: { duration: 2000 },
          }}
          style={{
            labels: {
              fontSize: 7,
              fill: '#fff',
            },
            data: {
              fill: ({ datum }) =>
                datum.status.status_uuid ===
                '6ffeded6-5c59-436b-aa16-c938e46fac28'
                  ? '#2D9D78'
                  : '#6E6E6E',
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[2016, 2017, 2018, 2019, 2020, 2021]}
        />
      </VictoryChart>
    </VictoryChartWrapper.Box>
  );
};
export default ChartTimeline;
