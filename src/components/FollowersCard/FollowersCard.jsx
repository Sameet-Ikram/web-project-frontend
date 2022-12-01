import React from 'react'
import './FollowersCard.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import User from '../User/User'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/UserRequest'

const FollowersCard = () => {
    const [followers, setFollowers] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser();
            setFollowers(data);
        }
        fetchPersons();
    }, []);

    return (
        <div className="FollowersCard">
            <LogoSearch />
            <h3>People You May Know</h3>
            {followers.map((person, id) => {
                if (followers.id !== user.id) {
                    return (
                        <User person={person} key={id} />
                    )
                }
            })}
        </div>
    )
}

export default FollowersCard