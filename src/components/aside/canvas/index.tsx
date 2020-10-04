import React from "react";

import { Title } from "@components/aside/title";
import { Canvas } from "@components/canvas";

export type PropsType = {
  className?: string;
};

/**
 * Group of controls
 * @param {string} className - Class name for component
 */
export const CanvasItem: React.FC<PropsType> = ({ className }) => {
  return (
    <li className={className}>
      <Title text="Canvas options" />
      <Canvas />
    </li>
  );
};
