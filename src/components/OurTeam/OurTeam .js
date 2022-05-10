import React from "react";
import AvatarCard from "../avatarCard/AvatarCard";
import "./ourTeam.scss";
const OurTeam = () => {
  return (
    <div className="our-team-wrapper">
      <h2 className="our-team-title">Our Team</h2>
      <div className="our-team-member-cards">
        <i class="fa-solid fa-angle-left"></i>
        <AvatarCard
          name="Selina Brandagamba"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
        />
        <AvatarCard
          name="Selina Brandagamba"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
        />
        <AvatarCard
          name="Selina Brandagamba"
          body="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
        />
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default OurTeam;
