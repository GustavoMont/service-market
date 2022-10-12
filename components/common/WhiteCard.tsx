import React, { ReactNode } from "react";

interface WhiteCardProps {
  className?: string;
  children: ReactNode;
}

function WhiteCard(props: WhiteCardProps) {
  return (
    <div className={`bg-white rounded-lg p-4 ${props.className}`}>
      {props.children}
    </div>
  );
}

export default WhiteCard;
