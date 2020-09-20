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
        startOn: "2020-09-07",
        tasks: ["Finish project work", "Fix errors"]
    },
    {
        startOn: "2020-09-08",
        tasks: ["Go to play", "Learn React"]
    },
    {
        startOn: "2020-09-09",
        tasks: ["Chill", "Visit the doctor"]
    },
    {
        startOn: "2020-09-10",
        tasks: ["Code review", "Complete UI for project"]
    },
    {
        startOn: "2020-09-11",
        tasks: ["Complete documentation", "Commit requested changes"]
    },
    {
        startOn: "2020-09-12",
        tasks: ["Take cat for a walk"]
    },
    {
        startOn: "2020-09-13",
        tasks: ["Hang out with friends"]
    }
    ],
    weekends: [6, 0]
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.payload
            }

        case 'SET_WEEKENDS':
            return {
                ...state,
                weekends: action.payload
            }

        default:
            return state;
    }
};

export default Reducer;