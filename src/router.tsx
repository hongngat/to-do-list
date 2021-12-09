import Dashboard from './views/Dashboard';
import Employee from './views/Employee';
import Profile from './views/Profile';
const routes = [
  { path: '/', component: Dashboard },
  { path: '/employee', component: Employee },
  { path: '/profile', component: Profile },
];

export default routes;
