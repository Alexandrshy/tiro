import classNames from "classnames";
import React from "react";

import { CoffeeLink } from "@components/coffeeLink";
import { GitHubLink } from "@components/githubLink";

import style from "./style.module.css";

/**
 * Footer with personal information
 */
export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li className={classNames(style.item, style.github)}>
          <GitHubLink />
        </li>
        <li className={style.item}>
          <CoffeeLink />
        </li>
      </ul>
    </footer>
  );
};
