import * as actions from './actionType';

export const onIncrement = (data) => {
    return {
        type: actions.INCREMENT,
        payload: data
    }
}

export const onUpdateEmployee = (employees, data, index) => {

    let arr = employees.slice();
    arr[index] = data;

    return {
        type: actions.UPDATE,
        payload: arr,
    }
}

export const onRemoveEmployee = (employees, index) => {
    let arr = employees.slice();
    arr.splice(index, 1);
    return {
        type: actions.REMOVE,
        payload: arr,
    }
}

export const onReset = () => {
    return {
        type: actions.RESET
    }
}