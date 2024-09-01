import AirbnbLogo from "../images/airbnb-logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={AirbnbLogo} className="navbar__logo" alt="Airbnb Logo" />
    </nav>
  );
}
