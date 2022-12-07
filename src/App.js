import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p className="Weather">
          <Weather />
        </p>
        <h6>
          Coded by Malwina Flis. It is open-sourced at <a href="#">GitHub</a>
        </h6>
      </div>
    </div>
  );
}

export default App;
