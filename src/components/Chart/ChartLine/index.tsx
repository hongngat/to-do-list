import { VictoryChart, VictoryLine } from 'victory';
import { VictoryChartWrapper } from '../styled';
const ChartLine = (props: any) => {
  return (
    <VictoryChartWrapper.Box>
      <VictoryChart height={200}>
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
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
                              style: { stroke: '#8D6ECC', strokeWidth: 3 },
                            };
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={props.data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      </VictoryChart>
    </VictoryChartWrapper.Box>
  );
};
export default ChartLine;
