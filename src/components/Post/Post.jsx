import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../../api/PostRequest'

const ImagePost = ({ data }) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length);
    const handlelike = () => {
        setLiked((prev) => !prev);
        likePost(data._id, user._id);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    };
    return (
        <div className="Post">
            <img src={data.image ? "http://localhost:5000/images/" + data.image : ""} alt="" />
            <div className="postReact">
                <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handlelike} />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

const EventPost = ({ data }) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length);
    const handlelike = () => {
        setLiked((prev) => !prev);
        likePost(data._id, user._id);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
    };
    return (
        <div className="Post">
            <h3>Event</h3>

            <img src={data.image ? "http://localhost:5000/images/" + data.image : ""} alt="" />
            <div className="postReact">
                <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handlelike} />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{likes} likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
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
    const { user } = useSelector((state) => state.authReducer.authData);
    return (
        <div>
            {data.datatype === "imagepost" ? <ImagePost data={data} /> : <EventPost data={data} />}
        </div>
    )
}

export default Post