import d from 'dayjs';
import DayCard from './day-card';
import Spinner from './spinner';

function BookingCalendar({
  month,
  year,
  setSelectedDate,
  selectedDate,
  updatingCalendar
}) {
  const from = d(`${year}-${month}-01`);
  const startOfMonth = from.startOf('month');
  const days = [...Array(parseInt(from.daysInMonth()))];

  return (
    <div className="__calender" style={{ position: 'relative' }}>
      {updatingCalendar && (
        <div
          style={{
            position: 'absolute',
            background: '#1d1d1d5b',
            height: '100%',
            width: '100%',
            borderRadius: '10px'
          }}
        >
          <Spinner />
        </div>
      )}
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
        {days.map((_, i) => {
          return (
            <DayCard
              {...{
                selectedDate,
                setSelectedDate,
                from,
                date: i + 1,
                key: i + 1
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookingCalendar;
