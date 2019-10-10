import * as ACTION_TYPES from '../actionTypes';

export const sidebar = (state = { open: true }, { type, value }) => {
    const newState = { ...state };

    switch (type) {
        case ACTION_TYPES.SET_SIDEBAR_OPEN:
            newState.open = value.open;

            return newState;
        default:
            return state;
    }
};
