import React from 'react';
import { Link } from 'react-router-dom';

import css from './SideBar.module.scss';

function SideBar(props) {
  return (
    <aside className={css.sideBar}>
      <nav>
        <ul>
          <li>
            <Link to="/usuarios">
              U
            </Link>
          </li>
          <li>
            <Link to="/times">
              T
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
