import Weather from "./Weather";
import Signature from "./Signature";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <Signature />
      </div>
    </div>
  );
}
