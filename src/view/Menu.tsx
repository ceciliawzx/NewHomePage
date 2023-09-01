import React from 'react';
import { MenuItem } from '../util/types';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <aside
      id='menu'
      role='complementary'
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'lightcyan',
        float: 'left',
        textAlign: 'center',
        width: '25%',
        height: '100%',
        overflowY: 'auto'
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
    <nav id='menu-nav' role='navigation' style={{ display: 'flex'}}>
      <ul style={{ listStyleType: 'none' }}>
        {items.map((item, i) => {
          return (
            <li id={`menu-item-${i}`}>
              <Link to={item.pageLink}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
