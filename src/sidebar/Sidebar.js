/* eslint-disable jsx-a11y/img-redundant-alt */
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About ME</span>
        <img
          src="https://images.unsplash.com/photo-1596733435762-adbc9b98888d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHx3b21hbiUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="about-me-photo"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipis. Lorem ipsum dolor sit
          amet, consectetur adipis. Lorem ipsum dolor sit amet, consectetur
          adipis. Lorem ipsum dolor sit amet, consectetur adipis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Nutrition</li>
          <li className="sidebarListItem">Kids</li>
          <li className="sidebarListItem">Healthy Sweets</li>
          <li className="sidebarListItem">Dairy Free</li>
          <li className="sidebarListItem">Keto</li>
          <li className="sidebarListItem">Vegetarian</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sideBarIcon fab fa-facebook-square"></i>
          <i className="sideBarIcon fab fa-instagram-square"></i>
          <i className="sideBarIcon fab fa-linkedin"></i>
          <i className="sideBarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
