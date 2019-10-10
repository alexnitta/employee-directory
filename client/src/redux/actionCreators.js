import * as ACTION_TYPES from './actionTypes';

export const setSidebarOpen = value => ({
    type: ACTION_TYPES.SET_SIDEBAR_OPEN,
    value,
});

export const setEmployeesList = value => ({
    type: ACTION_TYPES.SET_EMPLOYEES_LIST,
    value,
});
