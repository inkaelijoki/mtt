import "./App.css";
import "./index.css";
import React from "react";
import mtt_kuva from "./mtt_kuva.png";

console.log(mtt_kuva);

function Header() {
  return <img src={mtt_kuva} alt="mtt_kuva" />;
}

export default Header;
