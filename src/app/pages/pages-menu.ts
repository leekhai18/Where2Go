import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Chức năng',
    group: true,
  },
  {
    title: 'Địa điểm',
    icon: 'nb-keypad',
    link: '/pages/places',
    home: true,
  },
  {
    title: 'Viết bài',
    icon: 'nb-compose',
    link: '/pages/write-post',
  },
  {
    title: 'Cá nhân',
    group: true,
  },
  {
    title: 'Trang cá nhân',
    icon: 'nb-person',
    link: '/pages/profile',
  },
];

export const MENU_ITEMS_NON: NbMenuItem[] = [
  {
    title: 'Chức năng',
    group: true,
  },
  {
    title: 'Địa điểm',
    icon: 'nb-keypad',
    link: '/pages/places',
    home: true,
  },
  {
    title: 'Viết bài',
    icon: 'nb-compose',
    link: '/pages/write-post',
  }
];
