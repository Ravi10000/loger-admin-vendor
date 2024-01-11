import { Card } from 'antd';
import Spinner from './spinner';
import BookingDetails from './booking-details';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';

function LatestBookings() {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const {
    data: bookings,
    error,
    isFetching
  } = useQuery({
    queryKey: [
      'bookings',
      propertyId,
      [
        'userId',
        'checkInDate',
        'checkOutDate',
        'guestList',
        'specialRequests',
        'arrivalTime',
        'transactionId',
        'pkgDetails'
      ]
    ],
    enabled: !!propertyId,
    queryFn: async ({ queryKey }) => {
      const res = await api.get(
        `/booking/find/${propertyId}?select=${queryKey?.[2]?.join?.(
          ' '
        )}&queryType=latest-bookings&status=confirmed`
      );
      console.log({ res });
      return res?.data?.bookings || [];
    }
  });
  return (
    <Card style={{ padding: 0 }}>
      <div
        style={{
          minHeight: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {error ? (
          <p>Something went wrong</p>
        ) : isFetching ? (
          <Spinner />
        ) : !bookings?.length ? (
          <p>No Bookings found!</p>
        ) : (
          bookings?.map?.((booking, idx) => (
            <BookingDetails
              key={booking._id}
              {...{ booking, idx, totalBookings: bookings?.length }}
            />
          ))
        )}
      </div>
    </Card>
  );
}

export default LatestBookings;
