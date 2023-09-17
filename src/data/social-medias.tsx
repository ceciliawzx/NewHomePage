import { SocialMedia, SocialMediaType } from '../util/types';
import { mainUrl } from './data';

export const socialMedias: SocialMedia[] = [
  {
    type: SocialMediaType.Email,
    data: 'zixiwangcecilia@gmail.com',
    imgLink: `${mainUrl}icon/email.png`,
  },
  {
    type: SocialMediaType.Wechat,
    data: 'wechat',
    imgLink: `${mainUrl}wechat.jpg`,
  },
  {
    type: SocialMediaType.LinkedIn,
    data: 'zixi-wang-cecilia',
    imgLink: `${mainUrl}icon/linkedin.png`,
  },
];
