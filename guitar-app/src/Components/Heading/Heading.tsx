import type React from "react";
import CornerPhoto from "../CornerPhoto/CornerPhoto";
import "./Heading.css";

interface HeadingProps {
  beforeSpan?: string;
  span?: string;
  afterSpan?: string;
  paragraph?: string | React.ReactNode;
  photo?: string;
  logo: string
  hStyle?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  divStyle?: React.CSSProperties;
}
export default function Heading({
  beforeSpan,
  span,
  afterSpan,
  paragraph,
  photo,
  divStyle,
  hStyle,
  imgStyle,
}: HeadingProps) {
  return (
    <div className="Heading">
      <section>
        {photo && <CornerPhoto photo={photo} style={divStyle} imgStyle={imgStyle} />}
        <h1 style={hStyle}>
          {beforeSpan}
          <span>{span}</span>
          {afterSpan}
        </h1>
        {paragraph && <div>{paragraph}</div>}
      </section>
    </div>
  );
}
