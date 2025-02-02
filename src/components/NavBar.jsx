import React from 'react'
import { Link } from 'react-router-dom'

const NavBarList = [
  { id: 1, name: 'Home', icon: 'fas fa-home', link: '/' },
  { id: 2, name: 'About', icon: 'fas fa-question', link: '/about' },
  { id: 3, name: 'Courses', icon: 'fas fa-graduation-cap', link: '/courses' },
  { id: 4, name: 'Teachers', icon: 'fas fa-chalkboard-user', link: '/teachers' },
  { id: 5, name: 'Contact us', icon: 'fas fa-headset', link: '/contact' }
]

const NavBar = () => {
  return (
    <nav className="navbar">
      {NavBarList.map(({ id, name, icon, link }) => {
        return (
          <Link to={link} key={id}>
            <i className={icon}></i>
            <span>{name}</span>
          </Link>
        )
      })}
      <Link to="home.html">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link to="about.html">
        <i className="fas fa-question"></i>
        <span>About</span>
      </Link>
      <Link to="courses.html">
        <i className="fas fa-graduation-cap"></i>
        <span>Courses</span>
      </Link>
      <Link to="teachers.html">
        <i className="fas fa-chalkboard-user"></i>
        <span>Teachers</span>
      </Link>
      <Link to="/contact">
        <i className="fas fa-headset"></i>
        <span>Contact us</span>
      </Link>
    </nav>
  )
}

export default NavBar