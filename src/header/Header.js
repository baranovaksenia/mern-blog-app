import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle-small">Health & Care</span>
        <span className="headerTitle-large">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80"
        alt="healthcare_background"
      />
    </div>
  );
}
