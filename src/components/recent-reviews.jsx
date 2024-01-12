import { Card, Space, List, Typography, Empty } from 'antd';
import useReviews from 'src/hooks/review-queries';
import Spinner from './spinner';
import ReviewItem from './review-item';
import { Link } from 'react-router-dom';

function RecentReviews({ propertyId }) {
  const { reviews, isFetching, error } = useReviews({ propertyId });

  return (
    <Card
      bodyStyle={{
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      {error ? (
        <p>Something went wrong</p>
      ) : isFetching ? (
        <Spinner></Spinner>
      ) : !reviews?.length ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No Reviews Found"
        />
      ) : (
        reviews?.map(review => <ReviewItem key={review._id} review={review} />)
      )}
      <Typography.Link style={{ marginTop: 'auto' }}>
        <Link to={`/dashboard/manage/reviews?propertyId=${propertyId}`}>
          View All Reviews
        </Link>
      </Typography.Link>
    </Card>
  );
}

export default RecentReviews;
