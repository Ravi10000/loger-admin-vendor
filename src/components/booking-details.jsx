import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
import d from 'dayjs';
import { currencyFormator } from 'src/utils/currency-formator';

function BookingDetails({ booking }) {
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
  console.log({ user, userError, isUserLoading });
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div
        style={{
          flexGrow: 1
        }}
      >
        <h2>
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
          <p>{d(booking?.checkInDate).format('DD MMM YYYY')}</p>
          <span>to</span>
          <p>{d(booking?.checkOutDate).format('DD MMM YYYY')}</p>
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
        {/* <pre>{JSON.stringify(pkgDetails, null, 2)}</pre> */}
      </div>
      <div
        style={{
          flexGrow: 1,
          fontWeight: '600',
          fontSize: '14px'
        }}
      >
        {currencyFormator(pkgDetails?.discountedAmount)}
      </div>
      <div></div>
      {/* <pre>{booking?._id && JSON.stringify(booking, null, 2)}</pre> */}
    </div>
  );
}

export default BookingDetails;
