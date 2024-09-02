import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cardComponents = data.map((item) => (
    <Card
      name={item.name}
      image={item.image}
      description={item.description}
      price={item.price}
      rating={item.rating}
      ratingCountLocation={item.ratingCountLocation}
    />
  ));
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="card__container">{cardComponents}</div>
    </div>
  );
}

export default App;
