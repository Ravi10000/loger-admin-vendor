import { Space, Card, Typography, Rate, Col, Button } from 'antd';
import dayjs from 'dayjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import onError from 'src/utils/onError';
import api from 'src/api';

function ReviewCard({ review }) {
  console.log({ review });
  const { rating, comment, createdAt, user, status } = review;
  const { fName, lName, profilePic } = user;
  const formattedDate = dayjs(createdAt).format('DD MMMM YYYY');
  const isActive = status === 'active';
  const queryClient = useQueryClient();
  const { mutate, status: mutateStatus } = useMutation({
    mutationFn: async () => {
      const data = {
        reviewId: review._id,
        propertyId: review.propertyId,
        status: isActive ? 'inactive' : 'active'
      };
      const res = await api.put('/review/status', data);
      console.log({ res });
      toast.success('Review status updated successfully!');
      queryClient.invalidateQueries(['reviews', review?.propertyId]);
    },
    onError
  });
  return (
    <Col xs={22}>
      <Space
        direction="horizontal"
        size="large"
        style={{ width: '100%', marginTop: '2.5rem' }}
      >
        <Card size="large">
          <Space
            direction="vertical"
            style={{ width: '100%' }}
            align="flex-start"
          >
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Space direction="horizontal">
                <div
                  style={{
                    height: '50px',
                    width: '50px',
                    backgroundColor: profilePic ? 'transparent' : 'lightGray',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    ...(profilePic && {
                      backgroundImage: `url("${process.env.REACT_APP_SERVER_URL}/images/${profilePic}")`
                    })
                  }}
                >
                  {!profilePic &&
                    fName &&
                    fName?.charAt?.(0) + lName?.charAt?.(0)}
                </div>
                <div>
                  <h4 level={5}>
                    {fName} {lName}
                  </h4>
                  <p
                    style={{
                      fontWeight: '500',
                      fontSize: '12px',
                      color: '#1A232F'
                    }}
                  >
                    {formattedDate}
                  </p>
                </div>
              </Space>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Rate value={parseInt(rating)} disabled />
              </Space>
            </Space>
            <Typography.Text>{comment}</Typography.Text>
          </Space>
        </Card>
        <Space
          direction="vertical"
          style={{ width: '100%', marginLeft: '1.8rem' }}
        >
          <Button
            danger={isActive}
            type="primary"
            onClick={mutate}
            disabled={mutateStatus === 'pending'}
          >
            {isActive ? 'Make Inactive' : 'Make Active'}
          </Button>
        </Space>
      </Space>
    </Col>
  );
}

export default ReviewCard;
