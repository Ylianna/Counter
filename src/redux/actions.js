import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";

export function increment() {
return {
    type: INCREMENT
}
}
export function decrement() {
return {
    type: DECREMENT
}
}
export function enablebuttons() {
return {
    type: ENABLE_BUTTONS
}
}
export function disablebuttons() {
return {
    type: DISABLE_BUTTONS
}
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disablebuttons())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enablebuttons())
            }, 2000)
    }
}

export function changetheme(newTheme) {
return {
    type: CHANGE_THEME,
    payload: newTheme
}
}