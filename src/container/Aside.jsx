import { NavBar, Profile } from "../components";

const Aside = () => {
  return (
    <aside className="side-bar">

      <div id="close-btn">
        <i className="fas fa-times"></i>
      </div>

      <Profile img_src="images/teacher-1.jpg" name="John Doe" role="Math Teacher" />

      <NavBar />

    </aside>
  )
}

export default Aside;