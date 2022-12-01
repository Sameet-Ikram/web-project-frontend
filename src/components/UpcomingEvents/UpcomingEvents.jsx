import React from 'react'
import './UpcomingEvents.css'
import { EventData } from '../../Data/EventData'

const UpcomingEvents = () => {
    return (
        <div className="UpcomingEvents">
            <h3>Upcoming Events For You</h3>
            <div className='SearchOptions'>
                <div>
                    <span>City:</span><select name="Cities" id="city" className='selectbox'>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                    </select>
                </div>
                <div>
                    <span>Type:</span><select name="Type" id="type" className='selectbox'>
                        <option value="Public Talk">Public Talk</option>
                        <option value="Orphanage Visit">Orphanage Visit</option>
                        <option value="Plantation Drive">Plantation Drive</option>
                        <option value="Professional Talk">Professional Talk</option>
                    </select>
                </div>
                <button className="button s-button">Search</button>
            </div>
            {EventData.map((event) => {
                return (
                    <div className='event'>
                        <span>{event.eventname}</span>
                        <span>{event.eventype}</span>
                        <span>{event.eventdate}</span>
                        <span>{event.eventlocation}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UpcomingEvents