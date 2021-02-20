import classNames from "classnames";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";

import { GITHUB_MAIN_LINK } from "@constants/link";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Main menu
 */
export const Menu: React.FC = observer(() => {
  const store = useStore();

  return (
    <nav
      className={classNames(style.nav, {
        [style.isOpen]: store.navigation.isMenuOpen,
      })}
    >
      <ul className={style.list}>
        <li className={style.item}>
          <Link className={style.link} to="/about">
            About
          </Link>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            href={`${GITHUB_MAIN_LINK}/issues/new/choose`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Report issue
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            href={`${GITHUB_MAIN_LINK}/blob/master/CONTRIBUTING.md`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Contribute
          </a>
        </li>
      </ul>
    </nav>
  );
});
