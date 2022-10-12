import React, { HTMLAttributes, HtmlHTMLAttributes } from "react";

interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

function Body(props: BodyProps) {
  return <div {...props} className={`min-h-screen ${props.className} px-4`} />;
}

export default Body;
