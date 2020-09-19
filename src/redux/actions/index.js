export const setJobs = (payload) => async (dispatch) => {
    dispatch({
        type: 'SET_JOBS',
        payload: payload
    });
};

export const setWeekends = (payload) => async (dispatch) => {
    dispatch({
        type: 'SET_WEEKENDS',
        payload: payload
    });
};
