const initialState = {
    "employeelist": localStorage.getItem('EmployeeList')
};

export const EmployeeListReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'set':
            return {
                ...state,
                "employeelist": action.payload
            }
        default:
            return state
    }
};