export const initialState = {
    setLanguage: localStorage.getItem('setLanguage') || 'en_US',
}

export const SET_LANGUAGE = 'SET_LANGUAGE'

export function reducer(state, action) {
    switch (action.type) {
        case SET_LANGUAGE:
            localStorage.setItem('setLanguage', action.value)
            return { setLanguage: action.value }
        default:
            return initialState
    }
}
