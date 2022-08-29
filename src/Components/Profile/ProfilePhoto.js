import React from 'react';
import Picture from '../Images/ProfilePic.jpg'

function ProfilePhoto() {
    return (
        <div>
            <img className="profile-photo" src={ Picture } alt="Rihab's pic"/>
        </div>
    )
}
export default ProfilePhoto;


