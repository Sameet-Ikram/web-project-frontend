import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadAction.js";
import { useDispatch } from "react-redux";

const PostShare = () => {
    const loading = useSelector((state) => state.postReducer.uploading);
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const [showevent, setShowevent] = useState(false);
    const { user } = useSelector((state) => state.authReducer.authData);
    const desc = useRef();
    const dispatch = useDispatch();

    const reset = () => {
        desc.current.value = "";
        setImage(null);
        setShowevent(false);
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    };
    const onEventChange = () => {
        const d = document.getElementById("AddEvent");
        if (showevent === false) {
            setShowevent(true);
            d.style.display = "block";
        } else {
            setShowevent(false);
            d.style.display = "none";
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (document.getElementById("AddEvent").style.display === "block") {

            newPost.eventtype = document.getElementById("etype").value;
            newPost.eventdate = document.getElementById("edate").value;
            newPost.eventname = document.getElementById("ename").value;
            newPost.eventlocation = document.getElementById("elocation").value;
            newPost.datatype = "eventt";
        }
        else {
            newPost.eventtype = "";
            newPost.eventdate = "";
            newPost.eventname = "";
            newPost.eventlocation = "";
            newPost.datatype = "imagepost";
        }
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            try {
                dispatch(uploadImage(data));
            }
            catch (err) {
                console.log(err);
            }
        }
        dispatch(uploadPost(newPost));
        reset();
    };
    return (
        <div className="PostShare">
            <img src={user.profilePicture ? "http://localhost:5000/images/" + user.profilePicture : "http://localhost:5000/images/" + "defaultprofile.png"} alt="" />
            <div>
                <input
                    ref={desc}
                    required
                    type="text" placeholder="What's happening" />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>{" "}
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>{" "}
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        <button className="ev-button" onClick={onEventChange}>Create Event</button>
                    </div>

                    <button className="button ps-button" onClick={handleSubmit} disabled={loading}>{loading ? "Uploading..." : "Share"}</button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>
                <div id="AddEvent" style={{ display: "none" }}>
                    <input type="text" id="ename" className="eventinput" placeholder="Name" />
                    <input type="text" id="etype" className="eventinput" placeholder="Type" />
                    <input type="text" id="elocation" className="eventinput" placeholder="Location" />
                    <input type="text" id="edate" className="eventinput" placeholder="Date" />
                </div>
                {image && (

                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>

                )}

            </div>
        </div>
    );
};

export default PostShare;