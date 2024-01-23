import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/history" title="History">
        History
      </NavLink>
    </div>
  );
}
