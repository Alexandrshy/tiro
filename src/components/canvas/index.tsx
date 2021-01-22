import React from "react";

import { Canvas as CanvasControl } from "@components/canvas/canvas";
import { InputColor } from "@components/canvas/color";
import { Palette } from "@components/canvas/palette";
import { InputSize } from "@components/canvas/size";
import { List } from "@components/control/list";

/**
 *  Group of controllers for working with canvas
 */
export const Canvas: React.FC = () => {
  const ITEMS = [
    { name: "canvas", component: CanvasControl },
    {
      name: "size",
      component: InputSize,
    },
    { name: "color", component: InputColor },
    { name: "palette", component: Palette },
  ];

  return (
    <List>
      {ITEMS.map(({ name, component: Item }) => (
        <Item key={name} />
      ))}
    </List>
  );
};
