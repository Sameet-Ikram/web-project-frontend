import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Profileside.css'

const Profileside = ({ data }) => {
    return (
        <div className="ProfileSide">
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}

export default Profileside