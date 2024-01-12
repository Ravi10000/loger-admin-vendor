import { useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import Stars from './stars';
import d from 'dayjs';

const iconStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '30px',
  borderRadius: '5px 5px 5px 0',
  backgroundColor: 'var(--main-brand-color)',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 600

  //   backgroundColor: '#f1f1f1'
};
function ReviewItem({ review }) {
  const [showMore, setShowMore] = useState(false);
  const isLong = review?.comment?.length > 100;
  const commentText = isLong ? review?.comment?.slice(0, 75) : review?.comment;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#1A232F'
        }}
      >
        <div
          style={{
            ...iconStyles,
            backgroundImage: `url("${process.env.REACT_APP_SERVER_URL}/images/${review?.user?.profilePic}")`
          }}
        >
          {!review?.user?.profilePic && (
            <h4 style={{ fontWeight: '600', fontSize: '14px' }}>
              {review?.user?.fName?.charAt?.(0)}
              {review?.user?.lName?.charAt?.(0)}
            </h4>
          )}
        </div>
        <h5 style={{ textTransform: 'capitalize' }}>
          <Balancer>
            {review?.user?.fName} {review?.user?.lName}{' '}
          </Balancer>
        </h5>
        <Stars ratings={review?.rating} color="var(--main-brand-color)" />
        <span style={{ marginLeft: 'auto', fontSize: "14px" }}>
          {d(review?.createdAt).format('DD, MMM, YYYY')}
        </span>
      </div>
      <p>
        {showMore ? review?.comment : commentText} {isLong && '...'}{' '}
        {isLong && (
          <span
            style={{ color: 'var(--main-brand-color)', cursor: 'pointer' }}
            onClick={() => {
              setShowMore(ps => !ps);
            }}
          >
            {showMore ? 'show less' : 'show more'}
          </span>
        )}
      </p>
    </div>
  );
}

export default ReviewItem;
// {
//     "_id": "65a0dbb6cf6afcb8dc252510",
//     "rating": 4,
//     "userId": "658eac41ff2e759bc8b28383",
//     "propertyId": "659ceb46aacfa8cc9acb7000",
//     "status": "active",
//     "images": [],
//     "comment": "We had an amazing stay at this property! The location is perfect – close to [landmarks/attractions] and with stunning views. The property is beautifully maintained, and the attention to detail in the interior design truly impressed us. The rooms were spacious and comfortable, providing a relaxing retreat after a day of exploring. The amenities exceeded our expectations, and the thoughtful touches from the host made us feel right at home. The seamless check-in process and responsive communication added to the overall positive experience. ",
//     "createdAt": "2024-01-12T06:27:02.396Z",
//     "updatedAt": "2024-01-12T06:27:02.396Z",
//     "__v": 0,
//     "user": {
//       "_id": "658eac41ff2e759bc8b28383",
//       "fName": "Ravi",
//       "lName": "Sharma",
//       "email": "ravisince2k@gmail.com"
//     },
//     "id": "65a0dbb6cf6afcb8dc252510"
//   }
