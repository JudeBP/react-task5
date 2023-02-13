import * as actions from './actionType'

// Central Storage
const initialState = {
    count: 0,
    employees: [
        {
            name: "Jude Pasco",
            age: 23,
            designation: "DevOps",
            dateHired: "January 16, 2023"
          },
          {
            name: "John Doe",
            age: 25,
            designation: "Java Stack",
            dateHired: "January 24, 2021"
          },
          {
            name: "Zypa Guy",
            age: 23,
            designation: "Game Development",
            dateHired: "March 03, 2020"
          },
          {
            name: "Elon Musk",
            age: 35,
            designation: "Space Rockets",
            dateHired: "June 11, 2006"
          },
          {
            name: "Peter Parker",
            age: 27,
            designation: "MCU",
            dateHired: "September 30, 2016"
          },
    ]
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actions.INCREMENT:
            return { ...state, count: state.count + action.payload };
        case actions.UPDATE: 
            return { ...state, employees: action.payload };
        case actions.REMOVE: 
            return { ...state, employees: action.payload };
        case actions.RESET:
            return initialState;
        default: 
            return state;
    }
};

export default reducer;