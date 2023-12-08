import React from "react";
import Figure from "react-bootstrap/Figure";
import headerImg from "../assets/img/headerImg.png";
import "../layouts/style.css";

function BodyUp() {
  return (
    <div className="figureContainer">
    <Figure>
      <Figure.Image src={headerImg} />
      <Figure.Caption>A few words about this blog platform, Ghost, and how this site was made</Figure.Caption>
      <Figure.Caption>Why Ghost (& Figma) instead of Medium, WordPress or other options?</Figure.Caption>
    </Figure>
    </div>
  );
}

export default BodyUp;
