import React from "react";
export const Footer = () => {
  const color = "dark";
  const logo = "./icons/powered-by-tomorrow/" + color + ".svg";
  return (
    <footer>
      <img src={logo} className="ImagFoot" alt="Tomorro.io"></img>
    </footer>
  );
};
