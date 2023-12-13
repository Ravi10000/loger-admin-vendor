import { Space, Card, Typography, Rate, Divider, Col, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'src/api';
import { toast } from 'react-hot-toast';
import onError from 'src/utils/onError';

function ReviewCard({ review }) {
  console.log({ review });
  const { rating, comment, createdAt, user, status } = review;
  const { fName, lName, profilePic } = user;
  const formattedDate = dayjs(createdAt).format('DD MMM YYYY');
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
                {/* <img src={'/assets/images/dashboard-2.png'} alt="" /> */}
                {/* <img src={'/assets/images/dashboard-2.png'} alt="" /> */}
                <div
                  style={{
                    height: '60px',
                    width: '60px',
                    backgroundColor: profilePic ? 'transparent' : 'lightGray',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url("${process.env.REACT_APP_SERVER_URL}/images/${profilePic}")`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}
                >
                  {profilePic &&
                    fName &&
                    fName?.charAt?.(0) + lName?.charAt?.(0)}
                </div>

                <Space direction="vertical">
                  <Typography.Title level={5}>
                    {fName} {lName}
                  </Typography.Title>
                  <Typography.Text>{formattedDate}</Typography.Text>
                </Space>
              </Space>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Rate value={parseInt(rating)} disabled />
                {/* <Space
                  direction="horizontal"
                  style={{ width: '100%', marginLeft: '' }}
                >
                  <Typography.Text>3</Typography.Text>
                  <Divider type="vertical" />

                  <Typography.Title level={5}>5</Typography.Title>
                </Space> */}
              </Space>
            </Space>
            <Typography.Text>
              Lorem ipsum dolor sit amet consectetur. Quam eu tortor tellus
              blandit purus pellentesque. Non facilisis in lacus posuere sit in
              imperdiet euismod maecenas. At nibh velit suspendie pharetra
              aliquet risus duis congue. Vulputate vel lectus neque quam vel.
              Aliquam mauris in sem ac ornare. Urna consectetur massa ac est
              quam d
            </Typography.Text>
          </Space>
        </Card>
        <Space
          direction="vertical"
          style={{ width: '100%', marginLeft: '1.8rem' }}
        >
          {/* <Button icon={<EditOutlined />}>Edit</Button> */}
          {/* <Button icon={<DeleteOutlined />} danger> */}
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
