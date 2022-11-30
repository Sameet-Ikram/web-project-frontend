import React from 'react'
import './Invitations.css'
import { InvitationData } from '../../Data/InvitationsData'

const Invitations = () => {
    return (
        <div className='Invitations'>
            <h3>Invitations</h3>
            {InvitationData.map((invitation) => {
                return (
                    <div className='Invitation'>
                        <span>{invitation.type}</span>
                        <span>{invitation.name}</span>
                        <span>{invitation.shares}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Invitations