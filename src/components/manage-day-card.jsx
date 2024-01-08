import { Radio, Collapse } from 'antd';
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

  const {
    data: booking,
    error: bookingError,
    isLoading: isBookingInfoLoading
  } = useQuery({
    queryKey: ['booking', entry?.bookingId, selectedDate.date],
    enabled: !!entry?.bookingId,
    staleTime: 0,
    queryFn: async () => {
      const { data: { booking = {} } = {} } = await api.get(
        `/booking/one/${entry?.bookingId}`
      );
      return booking;
    }
  });

  const {
    data: user,
    error: userError,
    isLoading: isUserLoading
  } = useQuery({
    queryKey: ['user-details', booking?.userId, selectedDate.date],
    enabled: !!booking?.userId,
    queryFn: async () => {
      const { data: { user = {} } = {} } = await api.get(
        `/user/basic-details/${booking?.userId}${
          booking?.guestList?.length
            ? `/${booking?.guestList?.join?.(' ')}`
            : ''
        }`
      );
      console.log({ user });
      return user;
    }
  });
  console.log({ user, userError, isUserLoading });
  console.log({ booking });
  const pkgDetails = booking?.pkgDetails
    ? JSON.parse(booking?.pkgDetails)
    : null;
  const guestsInfo = user?.guests?.map(guest => ({
    key: guest?._id,
    label: guest?.firstName + ' ' + guest?.lastName,
    children: (
      <>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaPhone />
          <p>{guest?.phone}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MdEmail />
          <p>{guest?.email}</p>
        </div>
      </>
    )
  }));
  const diff = d(booking?.checkOutDate).diff(d(booking?.checkInDate), 'day');
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
      {isBookingInfoLoading ? (
        <Spinner />
      ) : bookingError ? (
        <p style={{ color: 'red' }}>Error fetching booking details</p>
      ) : (
        entry?.bookingId && (
          <div>
            <h4 style={{ color: 'var(--main-brand-color)' }}>
              Booking Details
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: '5px'
              }}
            >
              <h5>Check In</h5>
              <h5>Check Out</h5>
              <p>{d(booking?.checkInDate).format('DD MMM YYYY')}</p>
              <p>{d(booking?.checkOutDate).format('DD MMM YYYY')}</p>
            </div>
            {pkgDetails && (
              <>
                <h5 style={{ marginTop: '5px' }}>Details</h5>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                  }}
                >
                  <h6>No. of Adults</h6>
                  <h6>Paid Amount</h6>
                  <p>{pkgDetails.noOfAdults}</p>
                  <p>{pkgDetails.discountedAmount}</p>
                  <h6>Status</h6>
                  <h6>Length Of Stay</h6>
                  <p style={{ color: '#2a9d95' }}>{booking.status}</p>
                  <p>
                    {diff} {diff > 1 ? 'days' : 'day'}
                  </p>
                </div>
              </>
            )}
          </div>
        )
      )}
      {userError ? (
        <p>Error fetching user details</p>
      ) : isUserLoading ? (
        <Spinner />
      ) : (
        booking?.userId && (
          <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
            <h4 style={{ color: 'var(--main-brand-color)' }}>User Details</h4>
            <h5>Booked By</h5>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '30px',
                  width: '30px',
                  borderRadius: '100vw',
                  backgroundColor: '#f1f1f1',
                  backgroundImage: `url("${process.env.REACT_APP_SERVER_URL}/images/${user?.profilePic}")`
                }}
              >
                {!user?.profilePic && (
                  <h3>
                    {user?.fName?.charAt?.(0)} {user?.lName?.charAt?.(0)}
                  </h3>
                )}
              </div>
              <h5 style={{ textTransform: 'capitalize' }}>
                <Balancer>
                  {user?.fName} {user?.lName}
                </Balancer>
              </h5>
            </div>
            {user?.phone && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginLeft: '10px'
                }}
              >
                <FaPhone />
                <p>
                  {user?.countryCode} {user?.phone}
                </p>
              </div>
            )}
            {user?.email && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginLeft: '10px'
                }}
              >
                <MdEmail size={20} />
                <p
                  style={{
                    wordBreak: 'break-word'
                  }}
                >
                  <Balancer>{user?.email}</Balancer>
                </p>
              </div>
            )}
          </div>
        )
      )}
      {!!guestsInfo?.length && (
        <div>
          <h4
            style={{ marginBottom: '10px', color: 'var(--main-brand-color)' }}
          >
            Guests Info
          </h4>
          <Collapse items={guestsInfo} />
          {/* {booking?.guestList?.map(guest => (
          <p>{guest?.firstName}</p>
        ))} */}
        </div>
      )}
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

export default ManageDayCard;

// {
//   "_id": "6597d52d13fee69dccd044e1",
//   "userId": "6515496c2bbed3933e004f92",
//   "propertyId": "65979fc4efdb61d6e0e590cc",
//   "pkgDetails": "{\"rooms\":{},\"noOfAdults\":1,\"noOfRooms\":0,\"amount\":12000,\"discountedAmount\":12000}",
//   "checkInDate": "2024-01-11T00:00:00.000Z",
//   "checkOutDate": "2024-01-16T00:00:00.000Z",
//   "rooms": [],
//   "guestList": [],
//   "bookingAmount": 12000,
//   "transactionId": "6597d52d13fee69dccd044df",
//   "status": "confirmed",
//   "createdAt": "2024-01-05T10:08:45.903Z",
//   "updatedAt": "2024-01-05T10:09:04.074Z",
//   "__v": 0,
//   "id": "6597d52d13fee69dccd044e1"
// }

// {
//   "fName": "ravi",
//   "lName": "sharma",
//   "email": "email@admin51.com",
//   "phone": "9090909051",
//   "countryCode": "+91",
//   "profilePic": "1700642653665-hushaan-fromtinyisles-W6orAQiBmFg-unsplash.jpg"
// }
