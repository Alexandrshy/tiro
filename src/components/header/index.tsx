import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Logo } from "@components/logo";
import { Menu } from "@components/menu";
import { ReactComponent as ArrowLeft } from "@images/arrow-left.svg";
import { ReactComponent as ListUl } from "@images/list-ul.svg";
import { ReactComponent as SlidersVAlt } from "@images/sliders-v-alt.svg";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Header
 */
export const Header: React.FC = observer(() => {
  const store = useStore();

  const onClickFilter = useCallback(() => {
    store.navigation.switchFilterOpen();
  }, [store.navigation]);

  const onClickMenu = useCallback(() => {
    store.navigation.switchMenuOpen();
  }, [store.navigation]);

  return (
    <header className={style.header}>
      <button
        type="button"
        aria-label="Open filters"
        className={style.button}
        onClick={onClickFilter}
      >
        <ArrowLeft
          className={classNames({
            [style.hidden]: !store.navigation.isFilterOpen,
          })}
        />
        <SlidersVAlt
          className={classNames({
            [style.hidden]: store.navigation.isFilterOpen,
          })}
        />
      </button>
      <Logo />
      <button
        type="button"
        aria-label="Open menu"
        className={classNames(style.button, style.menuButton)}
        onClick={onClickMenu}
      >
        <ArrowLeft
          className={classNames(style.rightAlignment, {
            [style.hidden]: !store.navigation.isMenuOpen,
          })}
        />
        <ListUl
          className={classNames({
            [style.hidden]: store.navigation.isMenuOpen,
          })}
        />
      </button>
      <Menu />
    </header>
  );
});
