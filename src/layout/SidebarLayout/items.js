import { Link } from 'react-router-dom';
import { BellOutlined, HomeOutlined } from '@ant-design/icons';

export const groupItem = [
  {
    label: <Link to="/dashboard/groups/groups-home">Home Group</Link>,
    key: 'groups-home',
    icon: <HomeOutlined />
  },
  {
    label: <Link to="/dashboard/groups/reservations">Reservations</Link>,
    key: 'reservations',
    icon: <BellOutlined />
  }
];
