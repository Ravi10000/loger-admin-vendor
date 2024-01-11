import d from 'dayjs';
import { useState } from 'react';
import { Select } from 'antd';
import BookingCalendar from 'src/components/booking-calendar';
import ManageApartmentDayCard from 'src/components/manage-apartment-day-card';
import { months } from 'src/utils/calendar-info';
import Balancer from 'react-wrap-balancer';
import { TbMoodEmpty } from 'react-icons/tb';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
import ManageHotelDayCard from 'src/components/manage-hotel-day-card';
import Spinner from 'src/components/spinner';
import { CiSquareChevLeft, CiSquareChevRight } from 'react-icons/ci';
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
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const [year, setYear] = useState(d().year());
  const [month, setMonth] = useState(d().month() + 1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [updatingCalendar, setUpdatingCalendar] = useState(false);

  const { data: property } = useQuery({
    queryKey: ['property', propertyId, ['propertyName', 'propertyType']],
    queryFn: async ({ queryKey }) => {
      const { data: { property = {} } = {} } = await api.get(
        `/properties/find/${propertyId}?select=${queryKey?.[2]?.join?.(' ')}`
      );
      console.log({ property });
      return property;
    }
  });

  const {
    data: rooms,
    isFetching,
    error
  } = useQuery({
    queryKey: ['distinct-rooms', propertyId],
    enabled: property?.propertyType === 'hotel',
    queryFn: async () => {
      const { data: { rooms = [] } = {} } = await api.get(
        `/hotel-rooms/${propertyId}/distinct?select=roomName`
      );
      const hotelRooms = {};
      rooms.forEach(room => {
        hotelRooms[room.roomTypeId] = room;
      });
      return hotelRooms;
    }
  });

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <h2>Calendar</h2>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          // outline: '2px solid red',
          alignItems: 'center',
          // background: '#fff',
          padding: '10px',
          width: 'fit-content',
          borderRadius: '5px'
        }}
      >
        <Select
          size="large"
          defaultValue="Jan"
          style={{ width: 120 }}
          onChange={value => setMonth(value)}
          value={months[month]}
          options={months.map((month, i) => ({ value: i + 1, label: month }))}
        />
        <Select
          size="large"
          defaultValue={year}
          style={{ width: 120 }}
          onChange={value => setYear(value)}
          options={years.map(year => ({ value: year, label: year }))}
        />
        <div
          style={{
            color: '#2e2e2e',
            fontSize: '38px',
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <CiSquareChevLeft
            onClick={() => {
              if (month < 1) return;
              setMonth(ps => ps - 1);
            }}
          />
          <CiSquareChevRight
            onClick={() => {
              if (month > 10) return;
              setMonth(ps => ps + 1);
            }}
          />
        </div>
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
                <Balancer>Select any date to view Details</Balancer>
              </h2>
            </div>
          ) : property?.propertyType === 'apartment' ? (
            <ManageApartmentDayCard
              {...{
                year,
                month,
                selectedDate,
                setSelectedDate,
                setUpdatingCalendar
              }}
            />
          ) : isFetching ? (
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
              <Spinner />
            </div>
          ) : (
            rooms && (
              <ManageHotelDayCard
                {...{
                  year,
                  month,
                  selectedDate,
                  setSelectedDate,
                  setUpdatingCalendar,
                  rooms,
                  isRoomsFetching: isFetching
                }}
              />
            )
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ManageCalendar;
