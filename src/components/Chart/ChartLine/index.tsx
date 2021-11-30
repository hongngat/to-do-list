import { VictoryChart, VictoryLine } from 'victory';
import { VictoryChartWrapper } from '../styled';
import NoteChart from './NoteChart';
interface ValueData {
  data?: any;
  categoriesX?: any;
}
const ChartLine = ({ data, categoriesX }: ValueData) => {
  return (
    <VictoryChartWrapper.Box>
      <VictoryChart height={200}>
        {data &&
          data.map((item: any, index: any) => {
            return (
              <VictoryLine
                key={index}
                style={{
                  data: { stroke: item.color },
                  parent: { border: '1px solid #ccc' },
                }}
                events={[
                  {
                    target: 'parent',
                    eventHandlers: {
                      onClick: () => {
                        return [
                          {
                            target: 'data',
                            eventKey: 'all',
                            mutation: ({ style }) => {
                              return style.stroke === '#8D6ECC'
                                ? null
                                : {
                                    style: {
                                      stroke: '#8D6ECC',
                                      strokeWidth: 3,
                                    },
                                  };
                            },
                          },
                        ];
                      },
                    },
                  },
                ]}
                data={item.data}
                categories={{ x: categoriesX }}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
              />
            );
          })}
      </VictoryChart>
      <NoteChart data={data} />
    </VictoryChartWrapper.Box>
  );
};
export default ChartLine;
