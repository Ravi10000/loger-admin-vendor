import { Radio } from 'antd';
import { months } from 'src/utils/calendar-info';
import { useSearchParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Balancer } from 'react-wrap-balancer';
import api from 'src/api';
import d from 'dayjs';
import Spinner from './spinner';
import { useCalendarEntries } from 'src/hooks/calendar-entries.queries';

function ManageDayCard({ selectedDate, month, year, setUpdatingCalendar }) {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const queryClient = useQueryClient();
  const from = d(`${year}-${month}-${selectedDate.date}`);

  const { error, isFetching, calendarEntries } = useCalendarEntries({
    from,
    propertyId
  });
  const entry = calendarEntries?.[0] ?? { isBlocked: false };
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
      <p>
        {selectedDate.date} {months[month]} {year}
      </p>
      <h4>
        <Balancer>Open and Close for Bookings</Balancer>
      </h4>
      <div>
        {entry?._id && !entry.isBlocked ? (
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
        ) : status === 'pending' || isFetching ? (
          <Spinner />
        ) : (
          <Radio.Group
            defaultValue={entry?.isBlocked ? 'blocked' : 'open'}
            onChange={mutate}
          >
            <Radio value={'open'}>Open</Radio>
            <Radio value={'blocked'}>Close</Radio>
          </Radio.Group>
        )}
      </div>
    </div>
  );
}

export default ManageDayCard;
