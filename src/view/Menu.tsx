import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import { menuItems } from '../util/data';

export const Menu = () => {
  return (
    <aside
      id='side-menu'
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        textAlign: 'center',
      }}
    >
      <MenuBar />
    </aside>
  );
};

const MenuBar = () => {
  return (
    <nav
      id='menu-nav'
      role='navigation'
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <MenuItems />
    </nav>
  );
};

const MenuItems = () => {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        paddingInlineStart: '0',
        rowGap: '15px',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
      }}
    >
      {menuItems.map((item, i) => {
        return (
          <li
            key={`menu-item-${i}`}
            style={{
              color: 'white',
              fontSize: '1em',
              lineHeight: '20%',
              height: '10%'
            }}
          >
            <Link
              to={item.pageLink}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
