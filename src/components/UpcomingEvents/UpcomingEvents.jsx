import React from 'react'
import './UpcomingEvents.css'
import { EventData } from '../../Data/EventData'

const UpcomingEvents = () => {
    return (
        <div className="UpcomingEvents">
            <h3>Upcoming Events For You</h3>
            <div className='SearchOptions'>
                <div className='Search-Boxes'>
                    <div>
                        <select name="Cities" id="city" className='selectbox'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div>
                        <select name="Type" id="type" className='selectbox'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div className='s-button' >
                    <button className="button">Search</button>
                </div>
            </div>
            {EventData.map((event) => {
                return (
                    <div className='event'>
                        <span>{event.type}</span>
                        <span>{event.name}</span>
                        <span>{event.shares}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UpcomingEvents