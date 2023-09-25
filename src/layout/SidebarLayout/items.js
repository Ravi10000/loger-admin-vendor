import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BellOutlined, HomeOutlined, TagsOutlined } from '@ant-design/icons';
import { match } from 'path-to-regexp';

const items = [
  {
    path: '/dashboard/groups/groups-home',
    label: 'Home Group',
    icon: <HomeOutlined />
  },
  {
    path: '/dashboard/groups/reservations',
    label: 'Reservations',
    icon: <BellOutlined />
  },
  {
    path: '/dashboard/manage/home',
    icon: <HomeOutlined />,
    label: 'Home'
  },
  {
    path: '/dashboard/manage/reservations',
    icon: <BellOutlined />,
    label: 'Reservations'
  },
  {
    path: '/dashboard/manage/promotions',
    icon: <TagsOutlined />,
    label: 'Promotions'
  }
];

const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const urlMatch = match('/dashboard/:tab(groups|manage)', {
      decode: decodeURIComponent,
      end: false
    });
    const list = items
      .filter(({ path }) => {
        const isPathMatch = urlMatch(path);
        const pathNameMatch = urlMatch(pathname);

        return isPathMatch && pathNameMatch
          ? isPathMatch.params.tab === pathNameMatch.params.tab
          : false;
      })
      .map(({ path, icon, label }, index) => ({
        label: <Link to={path}>{label}</Link>,
        key: index,
        icon
      }));

    setMenuItems(list);
  }, [pathname]);

  return [menuItems];
};

export default useMenuItems;
