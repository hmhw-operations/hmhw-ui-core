import style from "./navbar.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { ThemeSwitch } from "../themeswitch";
import { useState } from "react";

type NavBarLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links?: NavBarLink[];
  title: string;
  logoutUrl?: string;
  onThemeChange?: () => void;
};

const Navbar = ({ links, title, logoutUrl, onThemeChange }: NavbarProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    onThemeChange?.();
  };

  return (
    <header className={style.appbar}>
      <div className={style.nav}>
        <nav className={style.nav}>
          {links?.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <a className={style.apptitle} href="">
        <svg className={style.logo} viewBox="0 0 41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M1.65108 0C2.2868 0 2.80216 0.537258 2.80216 1.2V4.65C2.80216 4.73284 2.86658 4.8 2.94604 4.8H7.1187C7.19817 4.8 7.26259 4.73284 7.26259 4.65V1.2C7.26259 0.537258 7.77795 0 8.41367 0C9.04939 0 9.56475 0.537258 9.56475 1.2V9.13116C9.56475 9.55549 10.0765 9.74401 10.3322 9.41392L16.7905 1.07807C18.4103 -1.01255 21.6511 0.181462 21.6511 2.86884V9.13116C21.6511 9.55549 22.1628 9.74401 22.4185 9.41392L28.8769 1.07807C30.4966 -1.01255 33.7374 0.181462 33.7374 2.86884V4.65C33.7374 4.73284 33.8018 4.8 33.8813 4.8H38.054C38.1334 4.8 38.1978 4.73284 38.1978 4.65V1.2C38.1978 0.537258 38.7132 0 39.3489 0C39.9846 0 40.5 0.537258 40.5 1.2V10.8C40.5 11.4627 39.9846 12 39.3489 12C38.7132 12 38.1978 11.4627 38.1978 10.8V7.35C38.1978 7.26716 38.1334 7.2 38.054 7.2H33.8813C33.8018 7.2 33.7374 7.26716 33.7374 7.35V10.8C33.7374 11.4627 33.2221 12 32.5863 12C31.9506 12 31.4353 11.4627 31.4353 10.8V2.86884C31.4353 2.44451 30.9235 2.25599 30.6678 2.58608L24.2095 10.9219C22.5897 13.0125 19.3489 11.8185 19.3489 9.13116V2.86884C19.3489 2.44451 18.8372 2.25599 18.5815 2.58608L12.1231 10.9219C10.5034 13.0125 7.26259 11.8185 7.26259 9.13116V7.35C7.26259 7.26716 7.19817 7.2 7.1187 7.2H2.94604C2.86658 7.2 2.80216 7.26716 2.80216 7.35V10.8C2.80216 11.4627 2.2868 12 1.65108 12C1.01536 12 0.5 11.4627 0.5 10.8V1.2C0.5 0.537258 1.01536 0 1.65108 0Z"
          />
        </svg>
        <span className={style.title}>{title}</span>
      </a>

      <div className={style.controls}>
        {onThemeChange && <ThemeSwitch title="Switch theme" checked={isDarkTheme} onChange={handleThemeChange} id="theme-switch" name="theme-switch" />}
        {logoutUrl && <a href={logoutUrl}>Logout</a>}
      </div>
    </header>
  );
};

export default Navbar;
