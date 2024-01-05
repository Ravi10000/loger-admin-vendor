import d from 'dayjs';
import { useState } from 'react';
import { Select } from 'antd';
import { HiLockClosed } from 'react-icons/hi';
import { GoCheckCircleFill } from 'react-icons/go';
import BookingCalendar from 'src/components/booking-calendar';
import { Form, Radio } from 'antd';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

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
  const [selectedDay, setSelectedDay] = useState(null);
  const booked = [
    {
      date: '2024-01-05',
      bookedBy: 'Ravi Sharma'
    },
    {
      date: '2024-01-06',
      bookedBy: 'Ravi Sharma'
    },
    {
      date: '2024-01-07',
      bookedBy: 'Ravi Sharma'
    }
  ];

  const bookedDates = booked.map(({ date, ...rest }) => ({
    date: d(date).date(),
    ...rest
  }));
  const blocked = [
    {
      date: '2024-01-26',
      bookedBy: 'Ravi Sharma'
    },
    {
      date: '2024-01-27',
      bookedBy: 'Ravi Sharma'
    }
  ];

  const blockedDates = blocked.map(({ date, ...rest }) => ({
    date: d(date).date(),
    ...rest
  }));
  console.log({ bookedDates });
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
        style={{ display: 'grid', gridTemplateColumns: '6fr 2fr 1fr', gap: '20px' }}
      >
        <BookingCalendar {...{ month, year, setSelectedDay, selectedDay }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <div
            style={{
              minHeight: '300px',
              width: '100%',
              border: '1px solid #8d9197',
              background: '#fff',
              borderRadius: '10px'
            }}
          ></div>
          {!!selectedDay && (
            <div
              style={{
                minHeight: '500px',
                width: '100%',
                border: '1px solid #8d9197',
                background: '#fff',
                borderRadius: '10px',
                padding: '10px'
              }}
            >
              <p>
                {selectedDay.date} {months[month]} {year}
              </p>
              <h4>Open and Close for Bookings</h4>
              <div>
                <Form>
                  <Form.Item
                    name="parkingAvailable"
                    rules={[
                      {
                        required: true,
                        message: 'Please select if parking is available'
                      }
                    ]}
                  >
                    <Radio.Group
                      value={selectedDay?.status === 'available'}
                      onChange={e => {
                        setSelectedDay({
                          ...selectedDay,
                          status: e.target.value ? 'available' : 'blocked'
                        });
                      }}
                      // value={isParkingAvailable}
                      // onChange={e => {
                      //   setIsParkingAvailable(e.target.value);
                      // }}
                    >
                      <Radio value={true}>Open</Radio>
                      <Radio value={false}>Close</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ManageCalendar;
