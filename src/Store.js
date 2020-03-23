export const initialState = {
    setLanguage: localStorage.getItem('setLanguage') || 'en_US',
    setTheme: localStorage.getItem('setTheme') || 'dark',
}

export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_THEME = 'SET_THEME'

export function reducer(state, action) {
    switch (action.type) {
        case SET_LANGUAGE:
            localStorage.setItem('setLanguage', action.value)
            return { ...state, setLanguage: action.value }
        case SET_THEME:
            localStorage.setItem('setTheme', action.value)
            return { ...state, setTheme: action.value }
        default:
            return initialState
    }
}
