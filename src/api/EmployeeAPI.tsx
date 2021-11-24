import {ApiService} from './ApiService';


export const getEmployee = async ()=>{
    const res = await ApiService.get(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists`);
    return res;
    
}
export const postEmployee = async (body:any)=>{
    const res = await ApiService.post(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists`,body);
    return res;
}

export const putEmployee = async ({id,... body}:any)=>{
    const res = await ApiService.put(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists/${id}`,body);
    return res;
}

export const deleteEmployee = async (id:any)=>{
    const res = await ApiService.delete(`https://619c48d468ebaa001753c809.mockapi.io/api/EmployeeLists/${id}`);
    return res;
}
