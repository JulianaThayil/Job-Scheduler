export const setJobs = (payload) => async (dispatch) => {
    dispatch({
        type: 'SET_JOBS',
        payload: payload
    });
};
