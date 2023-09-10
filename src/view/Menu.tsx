import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import { menuItems } from '../util/data';
import '../css/menu.css';
import { useAppContext } from '../context/appContext';

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
  const {
    state: { currPage },
    api: { setCurrPage },
  } = useAppContext();

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
          <li key={`menu-item-${i}`} className='menu-item'>
            <Link
              className={`menu-item-elem${
                currPage === item.pageLink ? ' active' : ''
              }`}
              to={item.pageLink}
              style={{
                color: `${
                  currPage === item.pageLink ? 'rgb(167 157 243)' : 'inherit'
                }`,
              }}
              onClick={() => setCurrPage(item.pageLink)}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
