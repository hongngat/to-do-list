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

const formatDate = (date: any) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

const ChartTimeline = (props: any) => {
  const dataChart = props.data.map((item: any) => {
    return {
      ...item,
      x: item.name,
      y: item.date_from == null ? new Date() : new Date(item.date_from),
      y0: item.date_to ? new Date(item.date_to) : new Date(),
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
            voronoiDimension="x"
            labels={({ datum }) => `${datum.x}
            Start date: ${formatDate(datum.y)}
            End date: ${formatDate(datum.y0)}
            status: ${datum.status.status_uuid}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                dx={0}
                centerOffset={{ y: -30, x: -120 }}
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
          style={{
            labels: {
              fontSize: 7,
              fill: '#fff',
            },
            data: {
              fill: ({ datum }) =>
                datum.status.status_uuid ==
                '6ffeded6-5c59-436b-aa16-c938e46fac28'
                  ? '#2D9D78'
                  : '#6E6E6E',
            },
          }}
        />
        <VictoryAxis dependentAxis scale="time" standalone={false} />
      </VictoryChart>
    </VictoryChartWrapper.Box>
  );
};
export default ChartTimeline;
