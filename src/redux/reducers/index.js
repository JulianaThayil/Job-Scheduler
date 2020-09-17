const initialState = {
    jobs: [{
        startOn: "2020-09-04",
        tasks: ["Eat", "Sleep", "Code", "Repeat"]
    },
    {
        startOn: "2020-09-05",
        tasks: ["Eat", "Dance"]
    },
    {
        startOn: "2020-09-06",
        tasks: ["Do homework"]
    },
    {
        startOn: "2020-09-08",
        tasks: ["Go to play", "Learn React"]
    },
    {
        startOn: "2020-09-09",
        tasks: ["Chill", "Visit the doctor"]
    }
    ]
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload
            }

        default:
            return state;
    }
};

export default Reducer;