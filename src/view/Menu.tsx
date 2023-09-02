import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import { menuItems } from '../util/data';

export const Menu = () => {
  return (
    <aside
      id='side-menu'
      role='complementary'
      style={{
        display: 'flex',
        justifyContent: 'center',
        // backgroundImage: 'url("menu-bg.jpeg")',
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
          marginTop: '250px',
        }}
      >
        {menuItems.map((item, i) => {
          return (
            <li
              key={`menu-item-${i}`}
              style={{
                color: 'white',
                fontSize: '20px',
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
