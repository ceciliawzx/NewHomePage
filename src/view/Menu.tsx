import React from 'react';
import { MenuItem } from '../util/types';
import { Link } from 'react-router-dom';
import '../css/style.css';

export const Menu = () => {
  return (
    <aside
      id='side-menu'
      role='complementary'
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'lightcyan',
        textAlign: 'center',
      }}
    >
      <Nav />
    </aside>
  );
};

const Nav = () => {
  const items: MenuItem[] = [
    {
      text: 'HOME',
      pageLink: '',
    },
    {
      text: 'PROJECTS',
      pageLink: '/projects',
    },
    {
      text: 'INTERESTS',
      pageLink: '/interests',
    },
    {
      text: 'CONTACT',
      pageLink: '/contact',
    },
  ];

  return (
    <nav
      id='menu-nav'
      role='navigation'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center', // ?
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          textAlign: 'center',
          alignItems: 'center',
          paddingInlineStart: '0',
        }}
      >
        {items.map((item, i) => {
          return (
            <li key={`menu-item-${i}`}>
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
    </nav>
  );
};
