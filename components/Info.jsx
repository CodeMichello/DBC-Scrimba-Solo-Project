import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="../Assets/profile.png" alt="Profile Picture" />
            <h2>Michello</h2>
            <p>Frontend Developer</p>
            <span>laurasmith.website</span> <br />
            <button id="btn-email">
            <i class="fa-solid fa-envelope"></i>Email
            </button>
            <button id="btn-link">
            <i class="fa-brands fa-linkedin"></i>Linkedin
            </button>    
        </div>
    )
}