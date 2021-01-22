import { observer } from "mobx-react";
import React from "react";
import { usePalette } from "react-palette";

import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * List of prominent colors for canvas
 */
export const Palette: React.FC = observer(() => {
  const store = useStore();
  const files = store.mockup.files.slice();

  const { data } = usePalette(files[0] || "");
  const keys = Object.keys(data);

  return keys.length ? (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {keys.map((key) => (
          <li key={key} className={style.item}>
            <button
              type="button"
              className={style.button}
              onClick={() =>
                store.previewColor.setColor(
                  data[key] || store.previewColor.value
                )
              }
              style={{ backgroundColor: data[key] }}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
});
