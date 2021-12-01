import { Container } from '@mui/material';
import AttendanceSummary from './components/AttendanceSummary';
import Timeline from './components/Timeline';
const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <h5 className="title">Dashboard</h5>
      <AttendanceSummary />
      <Timeline />
    </Container>
  );
};
export default Dashboard;
