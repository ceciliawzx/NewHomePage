import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import { menuItems } from '../util/data';
import '../css/menu.css';

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
  const [activePage, setActivePage] = useState('/~zw4021/');

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
            className='menu-item'
            onClick={() => setActivePage(item.pageLink)}
          >
            <Link
              className={`menu-item-elem${
                activePage === item.pageLink ? ' active' : ''
              }`}
              to={item.pageLink}
              style={{
                color: `${activePage === item.pageLink ? 'rgb(167 157 243)' : 'inherit'}`
              }}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
