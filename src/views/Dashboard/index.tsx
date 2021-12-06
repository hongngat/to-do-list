import { Container } from '@mui/material';
import AttendanceSummary from './components/AttendanceSummary';
import { getEmployee } from '../../api/EmployeeAPI';
import { useQuery } from 'react-query';
import Timeline from './components/Timeline';
const Dashboard = () => {
  const { data } = useQuery('employeeLists', getEmployee);
  return (
    <Container maxWidth="xl">
      <h5 className="title">Dashboard</h5>
      {data ? <AttendanceSummary data={data} /> : null}
      <Timeline />
    </Container>
  );
};
export default Dashboard;
