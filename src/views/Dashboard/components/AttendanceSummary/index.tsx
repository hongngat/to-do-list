import ChartLine from 'components/Chart/ChartLine';
import { WrapperBox, InputStyle } from '../../styled';
const AttendanceSummary = () => {
  const dataChart1 = {
    name: 'New Users',
    color: '#78BB7B',
    data: [
      { x: 1, y: 89 },
      { x: 2, y: 140 },
      { x: 3, y: 30 },
      { x: 4, y: 200 },
      { x: 5, y: 90 },
      { x: 6, y: 30 },
      { x: 7, y: 180 },
      { x: 8, y: 200 },
      { x: 9, y: 150 },
      { x: 10, y: 10 },
      { x: 11, y: 110 },
      { x: 12, y: 120 },
    ],
  };
  const dataChart2 = {
    name: 'Visits',
    color: '#A8A8A8',
    data: [
      { x: 1, y: 40 },
      { x: 2, y: 80 },
      { x: 3, y: 90 },
      { x: 4, y: 20 },
      { x: 5, y: 60 },
      { x: 6, y: 90 },
      { x: 7, y: 100 },
      { x: 8, y: 170 },
      { x: 9, y: 50 },
      { x: 10, y: 80 },
      { x: 11, y: 120 },
      { x: 12, y: 190 },
    ],
  };
  const categoriesX = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dataChart = [dataChart1, dataChart2];
  return (
    <div>
      <WrapperBox.Box>
        <WrapperBox.Header>
          <h5>Attendance Summary</h5>
          <div style={{ display: 'flex' }}>
            <InputStyle.InputGroup>
              <InputStyle.Label>From:</InputStyle.Label>
              <InputStyle.Input type="date" />
            </InputStyle.InputGroup>
            <InputStyle.InputGroup>
              <InputStyle.Label>To:</InputStyle.Label>
              <InputStyle.Input type="date" />
            </InputStyle.InputGroup>
          </div>
        </WrapperBox.Header>
        <ChartLine data={dataChart} categoriesX={categoriesX} />
      </WrapperBox.Box>
    </div>
  );
};
export default AttendanceSummary;
