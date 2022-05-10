import React from "react";
import "./avatarCard.scss";
const AvatarCard = ({ name, body }) => {
  return (
    <div className="avatar-card-wrapper">
      <img
        src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg"
        alt="profile"
        loading="lazy"
        className="avatar-image"
      />
      <p className="avatar-title">{name}</p>
      <p className="avatar-body">{body}</p>
    </div>
  );
};

export default AvatarCard;
