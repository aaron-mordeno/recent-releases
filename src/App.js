import "./App.css";
import Single from "./components/Single";

import hymns from "./images/mind rot - hymns of despondency.png";
import dive from "./images/parallel horizons - dive.jpg";
import everlasting from "./images/parallel horizons - everlasting.jpg";
import esoteric from "./images/introspections - esoteric.png";
import asylum from "./images/parallel horizons - asylum.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">MY LATEST RELEASES</h1>
        <h5>Check out some of my latest releases from my bands!</h5>
        <Single
          img={hymns}
          title="Hymns of Despondency [Full EP]"
          artist="Mind Rot"
          release="3/5/2023"
          youtube="https://www.youtube.com/watch?v=mg76yNyLfIM"
          spotify="https://open.spotify.com/album/2YOLAu9jtmQnAExmJCesPX?si=2gbZwznZTmGSGpZvXVHHVQ"
        />
        <Single
          img={dive}
          title="Dive"
          artist="Parallel Horizons"
          release="28/4/2023"
          youtube="https://www.youtube.com/watch?v=UUYNqaQS9H0"
          spotify="https://open.spotify.com/track/6HW7VDwb0QUFWNgK4fbXCa?si=901a535057404ecc"
        />
        <Single
          img={everlasting}
          title="Everlasting"
          artist="Parallel Horizons"
          release="21/4/2023"
          youtube="https://www.youtube.com/watch?v=fLYBlW9eyRw"
          spotify="https://open.spotify.com/track/3Wl3oqVLpYz2qck9urz99Q?si=703bcd2891ac44e8"
        />
        <Single
          img={esoteric}
          title="Esoteric"
          artist="Introspections"
          release="27/5/2022"
          youtube="https://www.youtube.com/watch?v=Wa8SqE6n6AU"
          spotify="https://open.spotify.com/track/5DMMvoNpEyMcCvw8DK4wel?si=a2ca916c93ce4dc4"
        />
        <Single
          img={asylum}
          title="Asylum"
          artist="Parallel Horizons"
          feature="Loisey, SaiKong, Zerron Qym"
          release="13/5/2022"
          youtube="https://www.youtube.com/watch?v=b-e0pOfcqs0"
          spotify="https://open.spotify.com/track/0pwaIfkGytU3LnkHXDELaf?si=547759e9810742d2"
        />
      </header>
    </div>
  );
}

export default App;
