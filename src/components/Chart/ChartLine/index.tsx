import { useState } from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryTooltip,
  createContainer,
} from 'victory';
import { VictoryVoronoiContainerProps } from 'victory-voronoi-container';
import { VictoryZoomContainerProps } from 'victory-zoom-container';
import { VictoryChartWrapper } from '../styled';
import NoteChart from './NoteChart';
interface ValueData {
  data?: any;
}

const VictoryZoomVoronoiContainer = createContainer<
  VictoryVoronoiContainerProps,
  VictoryZoomContainerProps
>('zoom', 'voronoi');

const ChartLine = ({ data }: ValueData) => {
  const [zoom, setZoom] = useState({});
  const handleZoom = (domain: any) => {
    setZoom({ domain });
  };

  return (
    <VictoryChartWrapper.Box>
      <VictoryChart
        height={200}
        containerComponent={
          <VictoryZoomVoronoiContainer
            responsive={true}
            zoomDimension="x"
            zoomDomain={zoom}
            onZoomDomainChange={handleZoom.bind(this)}
            voronoiDimension="x"
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                flyoutStyle={{ fill: 'white' }}
              />
            }
          />
        }
      >
        {data &&
          data.map((item: any, index: any) => {
            return (
              <VictoryLine
                key={index}
                style={{
                  data: { stroke: item.color },
                  parent: { border: '1px solid #ccc' },
                  labels: { fontSize: 7 },
                }}
                data={item.data}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
              />
            );
          })}
      </VictoryChart>
      {/* <VictoryAxis dependentAxis scale="time" standalone={false} /> */}
      <NoteChart data={data} />
    </VictoryChartWrapper.Box>
  );
};
export default ChartLine;
