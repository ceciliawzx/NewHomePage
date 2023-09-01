import React from 'react';
import { menuItem } from '../util/types';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <aside id='menu'>
      <Nav />
    </aside>
  );
};

const Nav = () => {
  const items: menuItem[] = [
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
    <nav id='menu-nav' role='navigation'>
      <ul>
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
