import "./Settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src="https://images.unsplash.com/photo-1460295956739-9e21c5aabf8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1079&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="username" />
          <label>Email</label>
          <input type="email" placeholder="email" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <button className="settingsButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
