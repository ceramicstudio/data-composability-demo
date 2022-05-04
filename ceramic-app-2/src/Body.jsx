import React from 'react'
import { useViewerRecord, useViewerConnection } from '@self.id/framework'

import './Body.css'



export default function Body() {

    const profile = useViewerRecord('basicProfile')
    const prefs = useViewerRecord('sitePrefs')

    const [connection] = useViewerConnection()

    return connection.status === 'connected' ? (
        <div>
            <div className={prefs.content.darkMode ? "dark-mode" : "light-mode"}>
                <h1 id='heading'>hello {profile.content.name}, this is app 2 and I got your name from the basicProfile data model</h1>

                <h1 id='about-text'>This app uses the sitePrerences data model to do things like set the background color.</h1>
                <h1 id='about-text'>Dark mode is current set to: {prefs.content.darkMode.toString()}</h1>
            </div>

            <div className='form-container'>
                <p>We can even combine data from each data model to create unique experiences</p>
                <p>In this example the user can decide whether to autofill the form or not by updating the sitePreferences datamodel</p>
                <p>The form will autofill with data from the basicProfile datamodel if the user has set the autofill preference to true</p>
                <form>

                    <label>
                        Name:
                        <input type="text" defaultValue={prefs.content.autofillProfile ? profile.content.name : null}></input>
                    </label>

                </form>
            </div>
        </div>


    ) : (
        <div className="mainBody">
            <div className="bodyCard">
                <p className="notConnected">Connet an Ethereum wallet to begin</p>
            </div>
        </div>
    )


}
