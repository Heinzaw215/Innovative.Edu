import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (img_src, name, role) => {
  return (
    <div className="profile">
      <img src={img_src} className="image" alt={`${name}'s profile`} />
      <h3 className="name">{name}</h3>
      <p className="role">{role}</p>
      <Link href="profile.html" className="btn">view profile</Link>
    </div>
  )
}

export default Profile