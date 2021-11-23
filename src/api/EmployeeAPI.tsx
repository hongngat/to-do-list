import {ApiService} from './ApiService';


export const getEmployee = async ()=>{
    const res = ApiService.get(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists`);
    return res;
    
}
export const postEmployee = async (body:any)=>{
    const res = ApiService.post(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists`,body);
    return res;
}

export const putEmployee = ({id,... body}:any)=>{
    const res = ApiService.put(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists/${id}`,body);
    return res;
}

export const deleteEmployee = (id:any)=>{
    const res = ApiService.delete(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists/${id}`);
    return res;
}
