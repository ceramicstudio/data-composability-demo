import React from 'react'
import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework"

export default function ConnectBtn() {

    const [connection, connect, disconnect] = useViewerConnection()
    return connection.status === 'connected' ? (
        <button onClick={() => disconnect()}>Disconnect</button>
    ) : 'ethereum' in window ? (
        <button onClick={async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            await connect(new EthereumAuthProvider(window.ethereum, accounts[0]))
        }}>Connect</button>
    ) : (
        <p>You need an Ethereum provider</p>
    )
}
