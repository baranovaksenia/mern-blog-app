import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle-small">Development & Marketing</span>
        <span className="headerTitle-large">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1524861646941-b897e7f18230?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="web-development background"
      />
    </div>
  );
}
