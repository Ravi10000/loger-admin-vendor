import { Button, Card, Col, Input, Row, Space, Typography, Form } from 'antd';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {
  ArrowLeftOutlined,
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { RiSkipRightLine } from 'react-icons/ri';
import { styled } from 'styled-components';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import api from 'src/api';
import { useHotelRoom, usePropertyId } from 'src/hooks/property-info.queries';
import { toast } from 'react-hot-toast';
import Spinner from 'src/components/spinner';
import { updateHotelRooms } from 'src/api/properties.req';
const media = {
  checkIcon: '/assets/images/hotel-bed.png'
};
const ControlButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Roomdetail = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();
  const { roomName } = useParams();
  const isRoom = roomName && roomName !== 'new';

  const [singleBedCount, setSingleBedCount] = useState(0);
  const [doubleBedCount, setDoubleBedCount] = useState(0);
  const [kingSizeBedCount, setKingSizeBedCount] = useState(0);
  const [queenSizeBedCount, setQueenSizeBedCount] = useState(0);

  const { room, isFetching } = useHotelRoom(
    [
      'roomName',
      'roomCount',
      'roomSize',
      'capacity',
      'count',
      'singleBedCount',
      'doubleBedCount',
      'kingSizeBedCount',
      'queenSizeBedCount'
    ],
    room => {
      console.log({ room });
      setSingleBedCount(room?.singleBedCount ?? 0);
      setDoubleBedCount(room?.doubleBedCount ?? 0);
      setKingSizeBedCount(room?.kingSizeBedCount ?? 0);
      setQueenSizeBedCount(room?.queenSizeBedCount ?? 0);
    }
  );
  const { mutate, status } = useMutation({
    mutationFn: async data => {
      if (data.roomName === 'new') {
        toast.error(
          'new is a restricted word for room name please use some other name'
        );
        return;
      }
      data = {
        ...data,
        propertyId,
        ...(isRoom && { newRoomName: data.roomName }),
        roomCount: parseInt(data.roomCount),
        capacity: parseInt(data.capacity),
        ...(singleBedCount && { singleBedCount }),
        ...(doubleBedCount && { doubleBedCount }),
        ...(kingSizeBedCount && { kingSizeBedCount }),
        ...(queenSizeBedCount && { queenSizeBedCount })
      };
      if (roomName !== 'new') {
        await updateHotelRooms(data);
      } else {
        await api.post('/hotel-rooms', data);
      }
      // 🔻replaces the current url with room detail url so that user can see the room detail that he just created
      navigate(
        `/hotel/${propertyId}/${
          data?.newRoomName ?? data.roomName
        }/room-detail`,
        {
          replace: true
        }
      );
      navigate(
        `/hotel/${propertyId}/${data?.newRoomName ?? data.roomName}/charge`
      );
    },
    onError: err => {
      toast.error(err?.response?.data?.message ?? 'Something went wrong');
    }
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <Typography.Title level={2}>
              {isRoom
                ? `Edit ${roomName} Room Details`
                : 'Add New Room Details'}
            </Typography.Title>
            <Button
              onClick={() => navigate(`/hotel/${propertyId}/view`)}
              style={{
                fontSize: '1rem',
                fontWeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>Skip</span>
              <RiSkipRightLine />
            </Button>
          </div>
          {isFetching ? (
            <Spinner />
          ) : (
            <Form
              onFinish={mutate}
              initialValues={{
                roomName: room?.roomName,
                roomCount: room?.count,
                roomSize: room?.roomSize,
                capacity: room?.capacity
              }}
            >
              <Row gutter={[32, 32]}>
                <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <Card>
                      <Space
                        direction="vertical"
                        size="large"
                        style={{ width: '100%' }}
                      >
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            What type of room this is?
                          </Typography.Title>
                          <Form.Item
                            name="roomName"
                            rules={[
                              {
                                required: true,
                                message: 'Please provide room name'
                              }
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="Enter room name"
                              style={{ marginBottom: '5px' }}
                            />
                          </Form.Item>
                        </Space>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            What is the size for this type of rooms?
                          </Typography.Title>
                          <Form.Item
                            name="roomSize"
                            rules={[
                              {
                                required: true,
                                message: 'Please provide room size '
                              }
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="W &times; H sqm"
                              style={{ width: '20%', marginBottom: '5px' }}
                            />
                          </Form.Item>
                        </Space>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            How many rooms of this type do you have?
                          </Typography.Title>
                          <Form.Item
                            name="roomCount"
                            rules={[
                              {
                                required: true,
                                message:
                                  'Tell us how many room you have of this type'
                              }
                            ]}
                          >
                            <Input
                              onInput={e =>
                                (e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ''
                                ))
                              }
                              size="large"
                              style={{ width: '20%', marginBottom: '5px' }}
                              placeholder="e.g. 20"
                            />
                          </Form.Item>
                        </Space>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            What's the capacity of guests for this room?
                          </Typography.Title>
                          <Form.Item
                            name="capacity"
                            rules={[
                              {
                                required: true,
                                message:
                                  'Tell us how many guest can stay in this room'
                              },
                              {
                                message: 'Please enter a valid capacity',
                                validator: (_, value) => {
                                  return parseInt(value) > 0
                                    ? Promise.resolve()
                                    : Promise.reject();
                                }
                              }
                            ]}
                          >
                            <Input
                              onInput={e =>
                                (e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ''
                                ))
                              }
                              size="large"
                              style={{ width: '20%', marginBottom: '5px' }}
                              placeholder="e.g. 2"
                            />
                          </Form.Item>
                        </Space>
                      </Space>
                    </Card>
                    <Card>
                      <Space
                        direction="vertical"
                        size="large"
                        style={{ width: '100%' }}
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Which Beds are Available in This Room?
                        </Typography.Title>
                        <Space
                          direction="horizontal"
                          size="large"
                          style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Space
                            direction="horizontal"
                            size="large"
                            style={{ width: '100%', alignItems: 'flex-start' }}
                          >
                            <img src={media.checkIcon} alt="" />
                            <Space
                              style={{ width: '100%' }}
                              direction="vertical"
                            >
                              <Typography.Text>
                                <b>Single Bed</b>
                              </Typography.Text>
                              <Typography.Paragraph style={{ marginBottom: 0 }}>
                                70-120cm wide
                              </Typography.Paragraph>
                            </Space>
                          </Space>
                          <Space.Compact>
                            <ControlButton
                              icon={
                                <MinusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() => setSingleBedCount(prev => --prev)}
                            />
                            <Input
                              onInput={e =>
                                (e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ''
                                ))
                              }
                              onChange={e => setSingleBedCount(e.target.value)}
                              min={0}
                              value={singleBedCount}
                              controls={false}
                              style={{ width: '3rem', textAlign: 'center' }}
                            />
                            <ControlButton
                              icon={
                                <PlusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() => setSingleBedCount(prev => ++prev)}
                            />
                          </Space.Compact>
                        </Space>
                        <Space
                          direction="horizontal"
                          size="large"
                          style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Space
                            direction="horizontal"
                            size="large"
                            style={{ width: '100%', alignItems: 'flex-start' }}
                          >
                            <img src={media.checkIcon} alt="" />
                            <Space
                              style={{ width: '100%' }}
                              direction="vertical"
                            >
                              <Typography.Text>
                                <b>Double Bed</b>
                              </Typography.Text>
                              <Typography.Paragraph style={{ marginBottom: 0 }}>
                                121-160cm wide
                              </Typography.Paragraph>
                            </Space>
                          </Space>
                          <Space.Compact>
                            <ControlButton
                              icon={
                                <MinusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() => setDoubleBedCount(prev => --prev)}
                            />
                            <Input
                              onInput={e =>
                                (e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ''
                                ))
                              }
                              onChange={e => setDoubleBedCount(e.target.value)}
                              min={0}
                              value={doubleBedCount}
                              controls={false}
                              style={{ width: '3rem', textAlign: 'center' }}
                            />
                            <ControlButton
                              icon={
                                <PlusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() => setDoubleBedCount(prev => ++prev)}
                            />
                          </Space.Compact>
                        </Space>
                        <Space
                          direction="horizontal"
                          size="large"
                          style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Space
                            direction="horizontal"
                            size="large"
                            style={{ width: '100%', alignItems: 'flex-start' }}
                          >
                            <img src={media.checkIcon} alt="" />
                            <Space
                              style={{ width: '100%' }}
                              direction="vertical"
                            >
                              <Typography.Text>
                                <b>Large Double Bed King Size</b>
                              </Typography.Text>
                              <Typography.Paragraph style={{ marginBottom: 0 }}>
                                151-180cm wide
                              </Typography.Paragraph>
                            </Space>
                          </Space>
                          <Space.Compact>
                            <ControlButton
                              icon={
                                <MinusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() =>
                                setKingSizeBedCount(prev => --prev)
                              }
                            />
                            <Input
                              onInput={e =>
                                (e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ''
                                ))
                              }
                              onChange={e =>
                                setKingSizeBedCount(e.target.value)
                              }
                              min={0}
                              value={kingSizeBedCount}
                              controls={false}
                              style={{ width: '3rem', textAlign: 'center' }}
                            />
                            <ControlButton
                              icon={
                                <PlusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() =>
                                setKingSizeBedCount(prev => ++prev)
                              }
                            />
                          </Space.Compact>
                        </Space>
                        <Space
                          direction="horizontal"
                          size="large"
                          style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                          }}
                        >
                          <Space
                            direction="horizontal"
                            size="large"
                            style={{ width: '100%', alignItems: 'flex-start' }}
                          >
                            <img src={media.checkIcon} alt="" />
                            <Space
                              style={{ width: '100%' }}
                              direction="vertical"
                              size={4}
                            >
                              <Typography.Text>
                                <b>Extra-Large Double Bed (Queen Size)</b>
                              </Typography.Text>
                              <Typography.Paragraph style={{ marginBottom: 0 }}>
                                181-210cm wide
                              </Typography.Paragraph>
                            </Space>
                          </Space>
                          <Space.Compact>
                            <ControlButton
                              icon={
                                <MinusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() =>
                                setQueenSizeBedCount(prev => --prev)
                              }
                            />
                            <Input
                              onInput={e =>
                                (e.target.value = e.target.value.replace(
                                  /[^0-9]/g,
                                  ''
                                ))
                              }
                              onChange={e =>
                                setQueenSizeBedCount(e.target.value)
                              }
                              min={0}
                              value={queenSizeBedCount}
                              controls={false}
                              style={{ width: '3rem', textAlign: 'center' }}
                            />
                            <ControlButton
                              icon={
                                <PlusOutlined style={{ fontSize: '0.8rem' }} />
                              }
                              onClick={() =>
                                setQueenSizeBedCount(prev => ++prev)
                              }
                            />
                          </Space.Compact>
                        </Space>
                        <CardBottom direction="horizontal">
                          <Button
                            size="large"
                            type="primary"
                            ghost
                            icon={<ArrowLeftOutlined />}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center'
                            }}
                            onClick={() => {
                              navigate(-1);
                            }}
                          >
                            Back
                          </Button>
                          <Button
                            size="large"
                            type="primary"
                            block
                            htmlType="submit"
                            disabled={status === 'pending'}
                          >
                            Continue
                          </Button>
                        </CardBottom>
                      </Space>
                    </Card>
                  </Space>
                </Col>
              </Row>
            </Form>
          )}
        </Container>
      </MainWrapper>
    </>
  );
};

export default Roomdetail;
