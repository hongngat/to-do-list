import ChartLine from 'components/Chart/ChartLine';
import { WrapperBox } from '../../styled';

const AttendanceSummary = (props: any) => {
  var occurences = props.data.reduce(function (r: any, row: any) {
    r[row.created_date] = ++r[row.created_date] || 1;
    return r;
  }, {});

  var result = Object.keys(occurences).map(function (key) {
    return { x: new Date(key), y: occurences[key] };
  });

  const dataChart1 = {
    name: 'Users',
    color: '#78BB7B',
    data: result,
  };
  const dataChart = [dataChart1];
  return (
    <div>
      <WrapperBox.Box>
        <WrapperBox.Header>
          <h5>Attendance Summary</h5>
          {/* <div style={{ display: 'flex' }}>
            <InputStyle.InputGroup>
              <InputStyle.Label>From:</InputStyle.Label>
              <InputStyle.Input type="date" />
            </InputStyle.InputGroup>
            <InputStyle.InputGroup>
              <InputStyle.Label>To:</InputStyle.Label>
              <InputStyle.Input type="date" />
            </InputStyle.InputGroup>
          </div> */}
        </WrapperBox.Header>
        <ChartLine data={dataChart} />
      </WrapperBox.Box>
    </div>
  );
};
export default AttendanceSummary;
