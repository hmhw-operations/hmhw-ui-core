import style from "./navbar.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { ThemeSwitch } from "../themeswitch";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <a href="#">Carnitas</a>
        <a href="#">Adobo</a>
        <a href="#">Asada</a>
      </div>
      <div>🥑</div>
      <div>
        <ThemeSwitch checked onChange={() => console.log("Clicked")} id="theme-switch" name="theme-switch" />
        <a href="#">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
