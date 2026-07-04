import shutdownImage from "../assets/shutdown.png";
import "./Shutdown.css";

export default function Shutdown() {
  return (
    <div className="shutdown-container">
      <img src={shutdownImage} className="shutdown-image" />
    </div>
  );
}
