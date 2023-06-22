import spotify from "../icons/spotify.png";
import youtube from "../icons/youtube.png";

export default function Single(props) {
  return (
    <div className="single-card">
      <div className="single-art-div">
        <img className="single-art" src={props.img}></img>
      </div>
      <div className="single-info-div">
        <div className="single-info">
          <h1 className="single-title">{props.title}</h1>
          <h2 className="artist">{props.artist}</h2>
          {props.feature && (
            <h6 className="feature">featuring {props.feature}</h6>
          )}
          <p className="release-date">{props.release}</p>
        </div>
        <div className="single-links">
          <a href={props.youtube} target="_blank">
            <img
              className="link-icon youtube-icon"
              src={youtube}
              width="50px"
              height="50px"
            ></img>
          </a>
          <a href={props.spotify} target="_blank">
            <img
              className="link-icon spotify-icon"
              src={spotify}
              width="50px"
              height="50px"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
