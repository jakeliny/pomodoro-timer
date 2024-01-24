import { Scroll, Timer } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src="/logo.png" alt="pomodoro timer logo" />
        Pomodoro Timer
      </span>
      <nav>
        <NavLink to="/" title="Home">
          <Timer size={32} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
