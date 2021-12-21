import "./App.css";
import Header from "./components/Header";
import Maze from "./components/Maze";
import GithubLink from "./components/GithubLink";

function App() {
  return (
    <div className="App">
      <center>
        <Header />
        <GithubLink />
        <Maze />
      </center>
    </div>
  );
}

export default App;
