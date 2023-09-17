import { MenuItem } from '../util/types';
import { mainUrl, projectUrl, interestUrl, contactUrl } from './data';

export const menuItems: MenuItem[] = [
  {
    text: 'HOME',
    pageLink: mainUrl,
  },
  {
    text: 'PROJECTS',
    pageLink: projectUrl,
  },
  {
    text: 'INTERESTS',
    pageLink: interestUrl,
  },
  {
    text: 'CONTACT',
    pageLink: contactUrl,
  },
];
