import React from 'react';
import './Profile.css';

function Profile({ user, onBack }) {
  return (
    <div className="profile-page">
      <button onClick={onBack} className="back-btn">← Back</button>
      <div className="profile-card">
        <img src={user.image} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div className="profile-details">
          <h3>About</h3>
          <p>This is the profile page for {user.name}.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;