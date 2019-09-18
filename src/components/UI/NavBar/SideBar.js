import React from 'react';
import { Link } from 'react-router-dom';

import css from './SideBar.module.scss';

function SideBar(props) {
  return (
    <aside className={css.sideBar}>
      <nav>
        <ul>
          <li>
            <Link to="pag01">
              Lorem ipsum.
            </Link>
          </li>
          <li>
            <Link to="pag02">
              Lorem ipsum.
            </Link>
          </li>
          <li>
            <Link to="pag03">
              Lorem ipsum.
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
