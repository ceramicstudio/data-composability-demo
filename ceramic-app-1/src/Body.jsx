import React from 'react'
import { useViewerRecord, useViewerConnection } from '@self.id/framework'
import { Link } from 'react-router-dom'
import './Body.css'



export default function Body() {

    const record = useViewerRecord('basicProfile')
    const prefs = useViewerRecord('sitePrefs')


    const [connection] = useViewerConnection()

    return connection.status === 'connected' ? (
        <div className="mainBody">
            <div className="bodyCard">
                <h2>Decentralized Identity</h2>
                <div className="profileItem">
                    <p className="keyField">DID:</p>
                    <p className="valueField">{connection.selfID.id.slice(0, 10)}....................{connection.selfID.id.slice(65)}</p>
                </div>
            </div>

            {record.content ? <div className="bodyCard">
                <h2>Data from basicProfile datamodel</h2>

                {Object.keys(record.content).map(key => (
                    <div className="profileItem" key={key}>
                        <p className="keyField">{key}:</p>
                        <p className="valueField">{record.content[key]}</p>
                    </div>
                ))}



            </div> : <div className="bodyCard">
                <h2>Data from basicProfile datamodel</h2>
                <p>No profile data found</p>
            </div>}



            <div className="bodyCard">
                <h2>Data from sitePreferences datamodel</h2>
                {prefs.content ? Object.keys(prefs.content).map(key => (
                    <div className="profileItem" key={key}>
                        <p className="keyField">{key}:</p>
                        <p className="valueField">{prefs.content[key] ? "true" : "false"}</p>
                    </div>
                )) : <p>No data</p>}
                <Link to="/preferences"><button className="button">Edit Site Preferences</button></Link>
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
