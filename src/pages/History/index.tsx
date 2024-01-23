import { NavLink } from "react-router-dom";

export function History() {
  return (
    <div>
      <h1>Hisory</h1>
      <NavLink to="/" title="Home">
        Home
      </NavLink>
    </div>
  );
}
