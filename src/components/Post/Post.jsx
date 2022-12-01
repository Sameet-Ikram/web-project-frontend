import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const ImagePost = ({ data }) => {
    return (
        <div className="Post">
            <img src={data.img} alt="" />
            <div className="postReact">
                <img src={data.liked ? Heart : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

const EventPost = ({ data }) => {
    return (
        <div className="Post">
            <h3>Event</h3>
            <div className="eventdetails">
                <span><b>{data.eventname}</b></span>
                <br />
                <span> {data.eventype}</span>
                <br />
                <span> {data.eventdate}</span>
                <br />
                <span> {data.eventlocation}</span>
            </div>
            <div>
                <button className='button'>Invite</button>
            </div>
            <div>
                <button className='button'>Interested</button>
            </div>
        </div>
    )
}

const Post = ({ data }) => {
    return (
        <div>
            {data.datatype === "imagepost" ? <ImagePost data={data} /> : <EventPost data={data} />}
        </div>
    )
}

export default Post