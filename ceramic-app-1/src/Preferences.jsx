import React, { useState } from 'react'
import { useViewerRecord } from '@self.id/framework'
import { Navigate } from 'react-router-dom'

import './Preferences.css'


export default function Preferences() {

    const record = useViewerRecord('sitePrefs')

    const [darkMode, setDarkMode] = useState("")
    const [autofillProfile, setAutofillProfile] = useState("")
    const [redirect, setRedirect] = useState(false)

    const hanldeSubmit = async (e) => {
        e.preventDefault()
        const dm = darkMode === "on" ? true : false
        const prof = autofillProfile === "on" ? true : false
        await record.merge({ darkMode: dm, autofillProfile: prof })
        setRedirect(true)
    }

    return (
        <div>
            {redirect ? <Navigate to="/" /> : null}
            <form onSubmit={hanldeSubmit}>
                <fieldset>
                    <label>
                        Always use dark mode:
                        <input type="checkbox" name="darkMode" onChange={e => setDarkMode(e.target.value)} />
                    </label>
                    <label>
                        Autofill forms using basicProfile:
                        <input type="checkbox" name="autofillProfile" onChange={e => setAutofillProfile(e.target.value)} />
                    </label>

                    <button>Submit</button>
                </fieldset>


            </form>
        </div>
    )
}
