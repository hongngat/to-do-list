import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'views/Pages/Login';
import Register from 'views/Pages/Register';
import './App.css';
import TheLayout from './containers/TheLayout';
import AccountProvider from './contexts/Account';
function App() {
  return (
    <div className="App">
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<TheLayout />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  );
}
const Providers = ({ children }: any) => {
  return (
    <AccountProvider>
      <>{children}</>
    </AccountProvider>
  );
};
export default App;
