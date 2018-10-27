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
    title: 'Tài khoản',
    group: true,
  },
  {
    title: 'Trang cá nhân',
    icon: 'nb-person',
    link: '/pages/profile',
  },
  {
    title: 'Đăng xuất',
    icon: 'nb-power',
    link: '',
  },
];
