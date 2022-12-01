import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    const onEventChange = () => {
        const d = document.getElementById("AddEvent");
        d.style.display = "block";
    };
    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder="What's happening" />
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
                    <button className="button ps-button">Share</button>
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
                        <img src={image.image} alt="" />
                    </div>

                )}

            </div>
        </div>
    );
};

export default PostShare;