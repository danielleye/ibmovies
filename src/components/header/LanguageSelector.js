import React, { useContext } from 'react'
import { Select, SelectItem } from 'carbon-components-react'
import { SET_LANGUAGE } from 'Store.js'
import { LangContext } from 'App.js'

export default function LanguageSelector() {
    const { langDispatch } = useContext(LangContext)
    const langItems = [
        { label: 'en', value: 'en_US' },
        { label: 'la', value: 'la_PG' },
    ]
    return (
        <Select
            defaultValue={localStorage.getItem('setLanguage') || 'en_US'}
            labelText=""
            id="language-selector"
            onChange={e =>
                langDispatch({ type: SET_LANGUAGE, value: e.target.value })
            }
        >
            {langItems.map((lang, i) => {
                return (
                    <SelectItem key={i} value={lang.value} text={lang.label} />
                )
            })}
        </Select>
    )
}
