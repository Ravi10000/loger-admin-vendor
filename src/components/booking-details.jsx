import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
import d from 'dayjs';
import { currencyFormator } from 'src/utils/currency-formator';

function BookingDetails({ booking, idx, totalBookings }) {
  const {
    data: user,
    error: userError,
    isLoading: isUserLoading
  } = useQuery({
    queryKey: ['user-details', booking?.userId],
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
  const pkgDetails = JSON.parse(booking?.pkgDetails);
  const stayLength = d(booking?.checkOutDate).diff(
    d(booking?.checkInDate),
    'day'
  );
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '20px',
        ...(idx < totalBookings - 1 && {
          borderBottom: '1px solid #D6D6D6'
        })
      }}
    >
      <div
        style={{
          flexGrow: 1
        }}
      >
        <h2 style={{ fontWeight: '600', fontSize: '20px' }}>
          {user?.fName} {user?.lName}
        </h2>
      </div>
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          fontWeight: '600',
          fontSize: '14px'
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            gap: '10px'
          }}
        >
          <p>{d(booking?.checkInDate).format('DD, MMMM, YYYY')}</p>
          <span>to</span>
          <p>{d(booking?.checkOutDate).format('DD, MMMM, YYYY')}</p>
        </div>
        <p>
          {stayLength} day{stayLength > 1 ? 's' : ''}
        </p>
        <div>
          <p>
            {pkgDetails.noOfAdults} Adults,{' '}
            {!!pkgDetails.noOfRooms && `${pkgDetails.noOfRooms} Rooms`}
          </p>
          <p>{booking?.roomName}</p>
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          fontWeight: '600',
          fontSize: '20px'
        }}
      >
        <p>{currencyFormator(pkgDetails?.discountedAmount)}</p>
        <p style={{ fontWeight: 400, fontSize: '16px' }}>
          {d(booking?.createdAt).format('DD, MMM, YYYY')}
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default BookingDetails;
