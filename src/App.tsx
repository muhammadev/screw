import AppRoutes from "./routes/AppRoutes.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";
import { NavLink } from "react-router";

function App() {
  return (
    <div className="App w-screen">
      <MainLayout>
        <nav className="flex gap-3 justify-center mb-12">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/games" end>Games</NavLink>
          <NavLink to="/play" end>Play</NavLink>
        </nav>
        <AppRoutes />
      </MainLayout>
    </div>
  );
}

export default App;
