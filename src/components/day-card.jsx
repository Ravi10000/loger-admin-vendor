import { GoCheckCircleFill } from 'react-icons/go';
import { HiLockClosed } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import { useCalendarEntries } from 'src/hooks/calendar-entries.queries';
import Spinner from './spinner';
import d from 'dayjs';

function DayCard({ selectedDate, setSelectedDate, from, date }) {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const isPast = d().date() > date;

  const { error, isFetching, calendarEntries } = useCalendarEntries({
    from: date ? from.set('date', date) : from,
    propertyId
  });
  const day = calendarEntries?.[0] ?? {};
  const status = day?.isBlocked
    ? 'blocked'
    : day?.date
    ? 'booked'
    : 'available';
  return (
    <div
      onClick={() => {
        if (isPast) return;
        if (!error && !isFetching) setSelectedDate({ _id: day?._id, date });
      }}
      // ${d().date() > day ? '--past' : ''}
      className={`__calender_day 
   --${status} 
   ${selectedDate?.date === date && '--selected'}
   ${isPast && '--past'}
   `}
      key={'day-' + date}
    >
      {error ? (
        'error'
      ) : isFetching ? (
        <Spinner />
      ) : (
        <>
          <p style={{ fontWeight: 600, color: 'black' }}>{date}</p>
          <p style={{ textAlign: 'center' }}>
            {status === 'blocked' ? (
              <HiLockClosed />
            ) : (
              status === 'booked' && <GoCheckCircleFill />
            )}
          </p>
          <p
            style={{
              textAlign: 'center',
              textTransform: 'capitalize',
              fontWeight: 500
            }}
          >
            {status}
          </p>
          {status === 'available' && (
            <p style={{ fontWeight: 600, textAlign: 'end' }}>₹ 900</p>
          )}
        </>
      )}
    </div>
  );
}

export default DayCard;
