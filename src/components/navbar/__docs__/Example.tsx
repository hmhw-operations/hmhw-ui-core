import React from "react";
import Navbar from "../Navbar";

const Example = () => {
  return (
    <Navbar
      title="Automator"
      links={[
        { href: "#", label: "Home" },
        { href: "#", label: "Users" },
        { href: "#", label: "About" }
      ]}
      onThemeChange={() => console.log("Theme changed")}
      logoutUrl="#"
    />
  );
};

export default Example;
