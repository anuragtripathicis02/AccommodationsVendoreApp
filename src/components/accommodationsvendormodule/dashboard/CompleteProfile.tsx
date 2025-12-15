import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CompleteProfile = () => {
    const percentage = 20;

    return (
      <div className="card-box banner-progressbar mb-4 d-flex flex-md-nowrap flex-wrap align-items-center gap-3">
        <div className="progress-wrapper">
          <div className="progress-bar">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textSize: "22px",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "rgba(255,255,255,0.3)",
                strokeLinecap: "round",
              })}
            />
          </div>
        </div>
  
        <div className="content">
          <div className="title">Complete Your Profile!</div>
          <div className="description">
            Complete your profile and provide all required documents to start using the app.
            Once your profile is verified, you'll be able to receive bookings and begin offering your services on the platform.
          </div>
        </div>
  
        <button className="complete-button">Complete Profile</button>
      </div>
    );
  };


export default CompleteProfile