import React from 'react'
import ConnectBtn from './ConnectBtn'
import './Header.css'



export default function Header() {
    return (
        <div className='navBar'>
            <h1> Ceramic App 1 </h1>
            <ConnectBtn />
        </div>
    )
}
