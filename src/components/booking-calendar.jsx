import d from 'dayjs';
import { useState } from 'react';
import { HiLockClosed } from 'react-icons/hi';
import { GoCheckCircleFill } from 'react-icons/go';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import api from 'src/api';
import LoadingPage from 'src/pages/loading.page';

function BookingCalendar({ month, year, setSelectedDay, selectedDay }) {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const from = d(`${year}-${month}-01`);
  const to = from.endOf('month');
  const startOfMonth = from.startOf('month');
  const [days, setDays] = useState(() => {
    return [...Array(parseInt(from.daysInMonth()))].map((_, i) => ({
      day: i + 1,
      status: 'available'
    }));
  });

  const {
    data: calendarEntries,
    isFetching,
    error
  } = useQuery({
    queryKey: ['calendarEntries', propertyId, from],
    enabled: !!propertyId && !!from,
    from,
    queryFn: async () => {
      const { data } = await api.get(
        `/calendar?propertyId=${propertyId}&from=${from.format(
          'YYYY-MM-DD'
        )}&to=${to.format('YYYY-MM-DD')}`
      );
      const entries = data?.calendarEntries || [];
      const tempDays = [...Array(parseInt(from.daysInMonth()))].map((_, i) => ({
        day: i + 1,
        status: 'available'
      }));
      entries.forEach(entry => {
        const day = d(entry.date).date();
        tempDays[day - 1] = {
          ...tempDays[day - 1],
          status: entry.isBlocked ? 'blocked' : 'booked'
        };
      });
      setDays(tempDays);
      return entries;
    }
  });

  if (error) return <p>Error fetching calendar entries</p>;
  if (isFetching)
    return (
      <div style={{ width: '50%', height: '500px' }}>
        <LoadingPage />
      </div>
    );
  return (
    <div className="__calender">
      <div className="__calender-week-names">
        <h3>SUN</h3>
        <h3>MON</h3>
        <h3>TUE</h3>
        <h3>WED</h3>
        <h3>THU</h3>
        <h3>FRI</h3>
        <h3>SAT</h3>
      </div>
      <div className="__calender-days">
        {startOfMonth &&
          [...Array(startOfMonth.day())].map((_, i) => (
            <div className="__calender_day --empty" key={'empty-' + i + 1}>
              <span></span>
            </div>
          ))}
        {days.map((day, i) => {
          day.date = i + 1;
          const { status, date } = day;
          return (
            <div
              onClick={() => {
                setSelectedDay(day);
              }}
              // ${d().date() > day ? '--past' : ''}
              className={`__calender_day 
               --${status} ${selectedDay?.date === date && '--selected'}`}
              key={'day-' + date}
            >
              <p style={{ fontWeight: 600, color: 'black' }}>{date}</p>
              <p style={{ textAlign: 'center' }}>
                {status === 'blocked' ? (
                  <HiLockClosed style={{ fontSize: '24px' }} />
                ) : (
                  status === 'booked' && (
                    <GoCheckCircleFill style={{ fontSize: '24px' }} />
                  )
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookingCalendar;
