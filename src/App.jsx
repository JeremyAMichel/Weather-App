import "./App.css";
import Header from "./components/Header/Header";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { WeatherProvider } from "./context/WeatherContext";
import CitySearch from "./components/CitySearch/CitySearch";

function App() {
  return (
    <WeatherProvider defaultCity="Lyon">
      <p>HELOODKJSNKJBFQDSHFJFBHJSBDFKSNLKFS</p>
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col s12 m8 l6 offset-m2 offset-l3">
              <CitySearch />
              <WeatherCard />
            </div>
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;