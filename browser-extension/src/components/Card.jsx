import React from 'react'
import './styles.css'

export default function Card({ extensionName, extensionDesc, extensionLogo }) {
    return (
        <>
            <div className='extension-card'>
                <div className='card-content'>
                    <div className='logo-container'>
                        <img src={extensionLogo} alt="" />
                    </div>
                    <div className='card-text'>
                        <h1>{extensionName}</h1>
                        <p>{extensionDesc}</p>
                    </div>
                </div>
                <div className='card-buttons'>
                    <button className='removeext'>Remove</button>
                    <label class="switch">
                        <input type="checkbox"/>
                            <div class="slider"></div>
                            <div class="slider-card">
                                <div class="slider-card-face slider-card-front"></div>
                                <div class="slider-card-face slider-card-back"></div>
                            </div>
                    </label>
                </div>
            </div>
        </>
    )
}
