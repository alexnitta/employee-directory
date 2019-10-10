import * as ACTION_TYPES from '../actionTypes';

export const employees = (state = { list: [] }, { type, value }) => {
    const newState = { ...state };

    switch (type) {
        case ACTION_TYPES.SET_EMPLOYEES_LIST:
            newState.list = value.list;
            return newState;
        default:
            return state;
    }
};
