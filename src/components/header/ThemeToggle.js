import React, { useContext } from 'react'
import { AppContext } from 'App.js'
import { SET_THEME, initialState } from 'Store.js'
import { Toggle } from 'carbon-components-react'

import './theme-toggle.scss'

export default function ThemeToggle() {
    const { dispatch } = useContext(AppContext)

    return (
        <Toggle
            aria-label="toggle button"
            defaultToggled={initialState.setTheme === 'dark'}
            id="theme-toggle"
            labelText="Enable Dark Mode"
            onToggle={e => {
                const theme = e ? 'dark' : 'light'
                dispatch({ type: SET_THEME, value: theme })
            }}
        />
    )
}
