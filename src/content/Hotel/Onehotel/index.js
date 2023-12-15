// import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Divider,
  Modal
} from 'antd';
import { Container, MainWrapper } from 'src/components/Global';
import Spinner from 'src/components/spinner';
import { useProperty, usePropertyId } from 'src/hooks/property-info.queries';
import { deleteHotelRooms, findDistinctRooms } from 'src/api/properties.req';
import { ExclamationCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import api from 'src/api';

const { confirm } = Modal;

const media = {
  checkIcon: '/assets/svg/check.svg',
  roomImg: '/assets/images/hotel-img-3.png'
};

const Grid = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props.$columns}, 1fr)`,
  gridGap: 10,
  padding: props.theme.antd.paddingXS
}));

const showDeleteConfirm = mutate => {
  confirm({
    title: 'Are you sure delete these rooms?',
    icon: <ExclamationCircleFilled />,
    content: 'This action cannot be undone.',
    okText: 'Yes, Delete',
    okType: 'danger',
    cancelText: 'No, Cancel',
    onOk() {
      mutate();
    }
    // onCancel() {}
  });
};

const HotelInfo = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();

  const { property, isFetching } = useProperty([
    'propertyName',
    'address',
    'facilities',
    'photos'
  ]);
  console.log({ property });
  const { data: entity, isFetching: isFetchingEntity } = useQuery({
    queryKey: ['entity'],
    queryFn: async () => {
      const entityRes = await api.get('/legal-entity');
      console.log({ entityRes });
      const entity = entityRes?.data?.entity;
      entity.completed =
        entity.address &&
        entity.bankName &&
        entity.bankAccountNumber &&
        entity.accountHolderName
          ? true
          : false;
      return entity;
    }
  });

  const { data: rooms, isFetching: isFetchingRooms } = useQuery({
    queryKey: ['hotel-rooms', propertyId],
    queryFn: async () => {
      const res = await findDistinctRooms(
        propertyId,
        'singleBedCount doubleBedCount kingSizeBedCount queenSizeBedCount capacity photos price'
      );
      console.log({ res });
      return res?.data?.rooms;
    }
  });
  return (
    <>
      <MainWrapper>
        <Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} xl={20} xxl={16}>
              <Space
                direction="vertical"
                style={{ width: '100%' }}
                size="large"
              >
                <Card>
                  {isFetching ? (
                    <div style={{ height: '80px' }}>
                      <Spinner />
                    </div>
                  ) : (
                    <Space
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <Space size="middle">
                        {!!property?.facilities?.length &&
                          property?.propertyName &&
                          property?.address && (
                            <img src={media.checkIcon} alt="" />
                          )}
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Text>Step 1</Typography.Text>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Property details
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Your property name , address , facilities and more.
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Typography.Link
                        underline
                        onClick={() =>
                          navigate(`/hotel/${propertyId}/property`)
                        }
                      >
                        Edit
                      </Typography.Link>
                    </Space>
                  )}
                </Card>
                <Card>
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <Space
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <Space size="middle">
                        {!!rooms?.length && (
                          <img src={media.checkIcon} alt="" />
                        )}
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Text>Step 2</Typography.Text>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Room details
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Room prices, photos, discounts, cancellation
                            policies and more.
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      {/* <Typography.Link underline>Edit</Typography.Link> */}
                    </Space>
                    {isFetchingRooms ? (
                      <div style={{ height: '80px' }}>
                        <Spinner />
                      </div>
                    ) : (
                      rooms?.map?.((room, idx) => (
                        <RoomCard room={room} key={'roomName' + idx} />
                      ))
                    )}

                    <Divider style={{ marginBlock: 0 }} />
                    <Space style={{ width: '100%', justifyContent: 'end' }}>
                      <Button
                        type="primary"
                        ghost
                        onClick={() => {
                          navigate(`/hotel/${propertyId}/new/room-detail`);
                        }}
                      >
                        Add Another Room
                      </Button>
                    </Space>
                  </Space>
                </Card>
                <Card>
                  <Space
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <Space size="middle">
                      {!!property?.photos?.length && (
                        <img src={media.checkIcon} alt="" />
                      )}
                      <Space
                        direction="vertical"
                        style={{
                          width: '100%'
                        }}
                      >
                        <Typography.Text>Step 3</Typography.Text>
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Photos
                        </Typography.Title>
                        <Typography.Paragraph style={{ marginBottom: 0 }}>
                          Photos of your property so guests know what to expect.
                        </Typography.Paragraph>
                      </Space>
                    </Space>
                    <Button
                      type="primary"
                      ghost
                      onClick={() => {
                        navigate(`/hotel/${propertyId}/preview-gallery`);
                      }}
                    >
                      {property?.photos?.length
                        ? 'Add More Photos'
                        : 'Add Photos'}
                    </Button>
                  </Space>
                  <Space>
                    <Grid $columns={4} style={{ marginTop: '20px' }}>
                      {property?.photos?.map?.(photo => {
                        if (!photo.isMain) return null;
                        return (
                          <div
                            key={photo._id}
                            style={{
                              width: '150px',
                              height: '150px',
                              borderRadius: '10px',
                              backgroundImage: `url("${process.env.REACT_APP_SERVER_URL}/images/${photo.photoUrl}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              position: 'relative'
                            }}
                          >
                            <p
                              style={{
                                background: '#0868f8',
                                color: '#fff',
                                width: 'fit-content',
                                padding: '2px 10px',
                                fontSize: '12px',
                                borderRadius: '15px',
                                position: 'absolute',
                                top: '5px',
                                left: '5px'
                              }}
                            >
                              Main
                            </p>
                          </div>
                        );
                      })}
                      {property?.photos?.map?.(photo => {
                        if (photo.isMain) return null;
                        return (
                          <div
                            key={photo._id}
                            style={{
                              width: '150px',
                              height: '150px',
                              borderRadius: '10px',
                              backgroundImage: `url("${process.env.REACT_APP_SERVER_URL}/images/${photo.photoUrl}")`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          ></div>
                        );
                      })}
                    </Grid>
                  </Space>
                </Card>
                <Card>
                  {isFetchingEntity ? (
                    <div style={{ height: '80px' }}>
                      <Spinner />
                    </div>
                  ) : (
                    <Space
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <Space size="middle">
                        {entity?.completed && (
                          <img src={media.checkIcon} alt="" />
                        )}
                        <Space
                          direction="vertical"
                          style={{
                            width: '100%'
                          }}
                        >
                          <Typography.Text>Step 4</Typography.Text>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Final Steps
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            Set Up Payments and Invoicing Before You Open for
                            Bookings.
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Button
                        type="primary"
                        ghost
                        onClick={() => navigate('/payment-details')}
                      >
                        {entity.completed
                          ? 'Edit Account Details'
                          : 'Complete Registration'}
                      </Button>
                    </Space>
                  )}
                </Card>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

function RoomCard({ room }) {
  console.log({ room });
  const propertyId = usePropertyId();
  const navigate = useNavigate();
  const {
    roomName,
    capacity,
    photos,
    singleBedCount,
    doubleBedCount,
    kingSizeBedCount,
    queenSizeBedCount,
    price,
    count
  } = room;
  const bedsCount =
    singleBedCount + doubleBedCount + kingSizeBedCount + queenSizeBedCount;
  const mainPhoto = photos.find(photo => photo.isMain);
  const mainPhotoImage = mainPhoto
    ? {
        backgroundImage: `url("${process.env.REACT_APP_SERVER_URL}/images/${mainPhoto.photoUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {};

  const queryClient = useQueryClient();
  const { mutate, status } = useMutation({
    mutationFn: async () => {
      const res = await deleteHotelRooms(propertyId, roomName);
      console.log({ res });
      queryClient.invalidateQueries(['hotel-rooms', propertyId]);
    }
  });

  return (
    <Space
      style={{ width: '100%', justifyContent: 'space-between' }}
      size="large"
    >
      <Space direction="horizontal" size="large">
        {/* <img src={media.roomImg} alt="" /> */}
        <div
          style={{
            height: '120px',
            width: '120px',
            backgroundColor: 'lightgray',
            borderRadius: '10px',
            ...mainPhotoImage
          }}
        ></div>
        <Space direction="vertical" size="large">
          <Typography.Title
            level={5}
            style={{ marginBottom: 0, fontSize: '20px', fontWeight: 'bold' }}
          >
            {roomName}
          </Typography.Title>
          <Space direction="horizontal">
            <Space direction="vertical">
              <Typography.Text>
                <b>Guests</b>
              </Typography.Text>
              <Typography.Text>{capacity}</Typography.Text>
            </Space>
            <Divider type="vertical" />
            <Space direction="vertical">
              <Typography.Text>
                <b>Beds</b>
              </Typography.Text>
              <Typography.Text>{bedsCount}</Typography.Text>
            </Space>
            <Divider type="vertical" />
            {/* <Space direction="vertical">
              <Typography.Text>
                <b>Bathrooms</b>
              </Typography.Text>
              <Typography.Text>Private</Typography.Text>
            </Space> */}
            <Divider type="vertical" />
            <Space direction="vertical">
              <Typography.Text>
                <b>Price</b>
              </Typography.Text>
              <Typography.Text>{price}</Typography.Text>
            </Space>
            <Divider type="vertical" />
            <Space direction="vertical">
              <Typography.Text>
                <b>Room of this type</b>
              </Typography.Text>
              <Typography.Text>{count}</Typography.Text>
            </Space>
          </Space>
        </Space>
      </Space>
      <Space size="large">
        <Button
          className="_delete"
          type="text"
          disabled={status === 'pending'}
          onClick={() => {
            showDeleteConfirm(mutate);
          }}
        >
          Delete
        </Button>
        <Button
          type="primary"
          disabled={status === 'pending'}
          onClick={() => {
            navigate(`/hotel/${propertyId}/${roomName}/room-detail`);
          }}
        >
          Edit
        </Button>
        {/* <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: <Typography.Text>1st item</Typography.Text>
              }
            ]
          }}
          trigger={['click']}
        >
          <Button type="primary" ghost>
            Edit
            <DownOutlined />
          </Button>
        </Dropdown> */}
      </Space>
    </Space>
  );
}

export default HotelInfo;
