import { Route, Routes } from 'react-router-dom';
import routes from '../router';
const TheContent = () => {
  return (
    <main className="main-content">
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                element={<route.component />}
              />
            )
          );
        })}
      </Routes>
    </main>
  );
};
export default TheContent;
