import "./Languages.css";
import languagesIcon from "../assets/lang.png";

import nativeBar from "../assets/native-bar.png";
import fluentBar from "../assets/fluent-bar.png";
import beginnerBar from "../assets/beginner-bar.png";

import KSAIcon from "../assets/ksa.png";
import UKIcon from "../assets/uk.png";
import FranceIcon from "../assets/france.png";

export default function Languages() {
  return (
    <div className="languages-window">
      <div className="languages-header">
        <img src={languagesIcon} className="languages-icon" />
        <h2>LANGUAGES</h2>
      </div>

      <div className="language">
        <div className="language-left">
          <img src={KSAIcon} className="language-icon" />

          <span className="language-name">Arabic</span>

          <span className="dots"></span>

          <span className="language-level">Native</span>
        </div>

        <img src={nativeBar} className="bar" />
      </div>

      <div className="language">
        <div className="language-left">
          <img src={UKIcon} className="language-icon" />

          <span className="language-name">English</span>

          <span className="dots"></span>

          <span className="language-level">Fluent</span>
        </div>

        <img src={fluentBar} className="bar" />
      </div>

      <div className="language">
        <div className="language-left">
          <img src={FranceIcon} className="language-icon" />

          <span className="language-name">French</span>

          <span className="dots"></span>

          <span className="language-level">Beginner</span>
        </div>

        <img src={beginnerBar} className="bar" />
      </div>
    </div>
  );
}
