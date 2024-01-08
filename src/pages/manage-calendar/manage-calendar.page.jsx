import d from 'dayjs';
import { useState } from 'react';
import { Select } from 'antd';
import BookingCalendar from 'src/components/booking-calendar';
import ManageDayCard from 'src/components/manage-day-card';
import { months } from 'src/utils/calendar-info';
import Balancer from 'react-wrap-balancer';
import { TbMoodEmpty } from 'react-icons/tb';
const year = d().year();
const years = [
  year - 5,
  year - 4,
  year - 3,
  year - 2,
  year - 1,
  year,
  year + 1
];

function ManageCalendar() {
  const [year, setYear] = useState(d().year());
  const [month, setMonth] = useState(d().month() + 1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [updatingCalendar, setUpdatingCalendar] = useState(false);
  console.log({ updatingCalendar });

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px'
        }}
      >
        <Select
          defaultValue="Jan"
          style={{ width: 120 }}
          onChange={value => setMonth(value)}
          options={months.map((month, i) => ({ value: i + 1, label: month }))}
        />
        <Select
          defaultValue={year}
          style={{ width: 120 }}
          onChange={value => setYear(value)}
          options={years.map(year => ({ value: year, label: year }))}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '6fr 2fr 1fr',
          gap: '20px'
        }}
      >
        <BookingCalendar
          {...{
            month,
            year,
            setSelectedDate,
            selectedDate,
            updatingCalendar
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* <div
            style={{
              minHeight: '300px',
              width: '100%',
              border: '1px solid #8d9197',
              background: '#fff',
              borderRadius: '10px'
            }}
          ></div> */}
          {!selectedDate ? (
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
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TbMoodEmpty size={98} color="#eee" />
              <h2 style={{ color: '#c5c5c5' }}>
                <Balancer>Select a date to view Details</Balancer>
              </h2>
            </div>
          ) : (
            <ManageDayCard
              {...{
                year,
                month,
                selectedDate,
                setSelectedDate,
                setUpdatingCalendar
              }}
            />
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ManageCalendar;
