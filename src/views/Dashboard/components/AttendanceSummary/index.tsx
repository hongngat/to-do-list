import ChartLine from 'components/Chart/ChartLine';
import { WrapperBox, InputStyle } from '../../styled';
const AttendanceSummary = () => {
  const dataChart = [
    { x: 1, y: 7 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];
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
        <ChartLine data={dataChart} />
      </WrapperBox.Box>
    </div>
  );
};
export default AttendanceSummary;
