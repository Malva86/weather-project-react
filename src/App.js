import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p className="Weather">
          <Weather startCity="Warsaw" />
        </p>
        <h6 className="footer">
          Coded by Malwina Flis. It is open-sourced at{" "}
          <a
            href="https://github.com/Malva86/weather-project-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h6>
      </div>
    </div>
  );
}

export default App;
