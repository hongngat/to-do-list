import { Container } from '@mui/material';
import AttendanceSummary from './components/AttendanceSummary';
const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <h5 className="title">Dashboard</h5>
      <AttendanceSummary />
    </Container>
  );
};
export default Dashboard;
