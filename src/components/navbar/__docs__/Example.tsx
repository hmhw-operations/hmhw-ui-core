import React from "react";
import Navbar from "../Navbar";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Navbar
        title="Automator"
        links={[
          { href: "#", label: "Home" },
          { href: "#", label: "Users" },
          { href: "#", label: "About" },
        ]}
        onThemeChange={() => console.log("Theme changed")}
        logoutUrl="#"
      />
    </div>
  );
};

export default Example;
