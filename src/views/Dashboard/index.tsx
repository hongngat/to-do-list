import { useEffect } from 'react';
import { Container } from '@mui/material';
import AttendanceSummary from './components/AttendanceSummary';
import { getEmployee } from '../../api/EmployeeAPI';
import { useQuery } from 'react-query';
import Timeline from './components/Timeline';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { data } = useQuery('employeeLists', getEmployee);
  const userlogin: any = localStorage.getItem('isLogin');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userlogin) {
      navigate('/login');
    }
  });
  return (
    <Container maxWidth="xl">
      <h5 className="title">Dashboard</h5>
      {data ? <AttendanceSummary data={data} /> : null}
      <Timeline />
    </Container>
  );
};
export default Dashboard;
