import HeroSectionPhoto from "../images/cover-image-airbnb.png";
export default function HeroSection() {
  return (
    <main className="hero--section">
      <img
        src={HeroSectionPhoto}
        className="hero--section__image"
        alt=" Hero section "
      />
      <div className="hero--section__text-area">
        <h1> Online Experiences </h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  );
}
