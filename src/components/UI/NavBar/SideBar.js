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
              Usuários
            </Link>
          </li>
          <li>
            <Link to="/times">
              Times
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
