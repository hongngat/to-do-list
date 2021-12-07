import react, { useState, createContext, useEffect } from 'react';
import { useMutationAPI } from '../../hook/QueryAPI';
import { postEmployee } from '../../api/EmployeeAPI';
import { useQuery } from 'react-query';
import { getEmployee } from '../../api/EmployeeAPI';

export const Context = createContext({
  isLogin: false,
  onLogoutAccount: () => {},
  onLoginAccount: (fields: any) => {},
  onRegister: (fields: any) => {},
});

export const AccountProvider = ({ children }: any) => {
  const { mutate } = useMutationAPI(postEmployee, 'employeeLists');
  const [isLogin, setIsLogin] = useState(false);
  const { data } = useQuery('employeeLists', getEmployee);

  const handleLogin = (fields: any) => {
    if (fields) {
      const user = data.filter((i: any) => i.email === fields.email);
      setIsLogin(true);
      localStorage.setItem('accountLogin', JSON.stringify(user[0]));
      localStorage.setItem('isLogin', 'true');
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem('accountLogin');
    localStorage.removeItem('isLogin');
  };

  const handleRegister = async (fields: any) => {
    var today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const data = {
      ...fields,
      phonenumber: null,
      birthdate: null,
      created_date: date,
    };
    await mutate(data);
    localStorage.setItem('accountLogin', JSON.stringify(data));
    setIsLogin(true);
    localStorage.setItem('isLogin', 'true');
  };

  return (
    <Context.Provider
      value={{
        isLogin: isLogin,
        onLogoutAccount: handleLogout,
        onLoginAccount: handleLogin,
        onRegister: handleRegister,
      }}
    >
      {children}
    </Context.Provider>
  );
};
