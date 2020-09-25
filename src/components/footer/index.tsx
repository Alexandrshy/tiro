import classNames from "classnames";
import React from "react";

import style from "./style.module.css";

/**
 *
 */
export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li className={style.item}>
          <a
            className={classNames(style.link, style.linkIcon, "link")}
            href="https://github.com/Alexandrshy/tiro"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.icon}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21a4.192 4.192 0 0 0 -.08 -3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 0 0 4 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
        </li>
        <li className={style.item}>
          <a
            className={classNames(style.link, style.linkIcon, "link")}
            href="https://twitter.com/alexandrshy"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.icon}
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
          </a>
        </li>
      </ul>
      <a
        className={classNames(style.link, "link")}
        href="https://www.buymeacoffee.com/R8rhtjI9M"
        rel="noopener noreferrer"
        target="_blank"
      >
        Buy Me A Coffee
      </a>
    </footer>
  );
};
