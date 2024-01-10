import { Radio, Collapse, Card } from 'antd';
import { months } from 'src/utils/calendar-info';
import { useSearchParams } from 'react-router-dom';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { Balancer } from 'react-wrap-balancer';
import api from 'src/api';
import d from 'dayjs';
import Spinner from './spinner';
import { useCalendarEntries } from 'src/hooks/calendar-entries.queries';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Fragment } from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';

const iconStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '30px',
  borderRadius: '100vw',
  backgroundColor: '#f1f1f1'
};
const stats = {
  display: 'grid',
  gridTemplateColumns: '3fr 1fr',
  gap: '10px'
};

function ManageHotelDayCard({
  selectedDate,
  month,
  year,
  setUpdatingCalendar,
  isRoomsFetching,
  rooms
}) {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const queryClient = useQueryClient();
  const from = d(`${year}-${month}-${selectedDate.date}`);

  const { error, isFetching, calendarEntries } = useCalendarEntries({
    from,
    propertyId
  });

  const entry = calendarEntries?.[0] ?? { isBlocked: false };
  const lookup = {};
  calendarEntries?.forEach(entry => {
    lookup[entry.roomTypeId] = (lookup[entry.roomTypeId] || 0) + 1;
  });
  console.log({ lookup });
  const allRooms = Object.keys(rooms);
  console.log({ allRooms });

  const entryExists = !!entry?._id;
  console.log({ entry });

  const { mutate, status } = useMutation({
    mutationFn: async e => {
      setUpdatingCalendar(true);
      const isBlocked = e.target.value === 'blocked';
      let res;
      if (entryExists && !isBlocked) {
        res = await api.delete(`/calendar/${entry._id}`);
      } else {
        res = await api.post('/calendar', {
          propertyId,
          date: d(`${year}-${month}-${selectedDate.date}`).format('YYYY-MM-DD'),
          isBlocked
        });
      }
      console.log({ res });
      queryClient.invalidateQueries({
        queryKey: [
          'calendar-entries',
          propertyId,
          d(`${year}-${month}-${selectedDate.date}`).format('YYYY-MM-DD')
        ],
        exact: true
      });
    },
    onSuccess: () => {
      setUpdatingCalendar(false);
    }
  });

  return (
    <div
      style={{
        minHeight: '500px',
        width: '100%',
        border: '1px solid #8d9197',
        background: '#fff',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#f1f1f173',
          padding: '10px',
          borderRadius: '10px'
        }}
      >
        <p style={{ fontWeight: '500' }}>
          {selectedDate.date} {months[month]} {year}
        </p>
        {entry?.bookingId && (
          <p
            style={{
              color: '#2a9d8f',
              background: '#e9f7f6',
              width: 'fit-content',
              padding: '5px 20px',
              borderRadius: '100vw',
              fontWeight: 600
            }}
          >
            Booked
          </p>
        )}
        {entry?.isBlocked && (
          <p
            style={{
              color: '#f02929',
              background: '#f7e9e9',
              width: 'fit-content',
              padding: '5px 20px',
              borderRadius: '100vw',
              fontWeight: 600
            }}
          >
            Blocked
          </p>
        )}
      </div>
      {!entry?.bookingId && (
        <h4>
          <Balancer>Open and Close for Bookings</Balancer>
        </h4>
      )}
      <div>
        {status === 'pending' || isFetching ? (
          <Spinner />
        ) : (
          !entry?.bookingId && (
            <Radio.Group
              defaultValue={entry?.isBlocked ? 'blocked' : 'open'}
              onChange={mutate}
            >
              <Radio value={'open'}>Open</Radio>
              <Radio value={'blocked'}>Close</Radio>
            </Radio.Group>
          )
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center'
        }}
      >
        {allRooms.map(room => (
          <Card key={room} style={{ width: '100%' }}>
            <h3 style={{ color: 'var(--main-brand-color)' }}>
              {rooms[room].roomName}
            </h3>
            <div style={stats}>
              <p>Booked</p>
              <p>{lookup[room] || 0}</p>
              <p>Available</p>
              <p>{rooms[room].count - (lookup[room] || 0)}</p>
            </div>
          </Card>
        ))}
      </div>

      <p
        style={{
          color: 'var(--main-brand-color)',
          marginTop: 'auto',
          marginBottom: '10px'
        }}
      >
        Manage Your Promotions
      </p>
    </div>
  );
}

export default ManageHotelDayCard;
