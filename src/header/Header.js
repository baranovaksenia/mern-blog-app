import "./header.css";
import Video from "../videos/video.mp4";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle-small">Healthy LifeStyle</span>
        <span className="headerTitle-large">Blog</span>
      </div>
      <div className="headerContainer">
        <div className="headerBg">
          <video
            className="headerVideo"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </div>
      </div>
      {/* <img
        className="headerImg"
        src="https://image.freepik.com/free-vector/healthy-food-concept-idea-organic-menu-diet-natural-nutrition-fresh-ingredient-body-health-care-weight-loss-illustration_277904-4254.jpg"
        alt="web-development background"
      /> */}
    </div>
  );
}
