import AppRoutes from "./routes/AppRoutes.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";
import { NavLink } from "react-router";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/games" end>Games</NavLink>
        </nav>
        <AppRoutes />
      </MainLayout>
    </div>
  );
}

export default App;
