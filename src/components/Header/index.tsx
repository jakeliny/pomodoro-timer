import { FileText, Timer } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div>
        <img src="/logo.png" alt="pomodoro timer logo" />
      </div>
      <div>
        <NavLink to="/" title="Home">
          <Timer size={32} />
        </NavLink>
        <NavLink to="/history" title="History">
          <FileText size={32} />
        </NavLink>
      </div>
    </header>
  );
}
