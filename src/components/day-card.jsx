import { GoCheckCircleFill } from 'react-icons/go';
import { HiLockClosed } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import { useCalendarEntries } from 'src/hooks/calendar-entries.queries';
import Spinner from './spinner';
import d from 'dayjs';
import { FaCalendar } from 'react-icons/fa6';

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
    : day?.bookingId
    ? 'booked'
    : 'available';
  return (
    <div
      onClick={() => {
        // if (isPast) return;
        if (!error && !isFetching) setSelectedDate({ _id: day?._id, date });
      }}
      // ${d().date() > day ? '--past' : ''}
      className={`__calender_day 
   --${status} 
   ${selectedDate?.date === date && '--selected'}
   ${isPast && '--past'} selectable
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
              <HiLockClosed size={24} />
            ) : status === 'booked' ? (
              <GoCheckCircleFill size={24} />
            ) : (
              <FaCalendar color="#c3c3c3" size={24} />
            )}
          </p>
          <p
            style={{
              textAlign: 'center',
              textTransform: 'capitalize',
              alignSelf: 'center',
              fontWeight: 500
              // ...(status === 'available' && { marginBottom: 'auto' })
            }}
          >
            {status}
          </p>
          {/* {status === 'available' && (
            <p style={{ fontWeight: 600, textAlign: 'end' }}>r</p>
          )} */}
        </>
      )}
    </div>
  );
}

export default DayCard;
