import "../App.css";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="">
      <header className="App-header mb-12">
        Screw.. Who's gonna be screwed tonight?
      </header>

      <div className="pt-4">
        <NavLink
          to="/play"
          className="bg-black px-4 py-3 rounded-md hover:border"
        >
          Start A Game
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
