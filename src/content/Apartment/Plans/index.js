import {
  ArrowLeftOutlined,
  CloseOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { CgRemove } from 'react-icons/cg';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Row,
  Space,
  Typography,
  Input,
  Spin
} from 'antd';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useQuery, useMutation } from '@tanstack/react-query';
import api from 'src/api';
import { toast } from 'react-hot-toast';
import { AiOutlinePercentage } from 'react-icons/ai';
import { findApartment, findHotelRoom } from 'src/api/properties.req';
import { useIsHotel, usePropertyId } from 'src/hooks/property-info';
import Spinner from 'src/components/spinner';

const Charge = () => {
  const propertyId = usePropertyId();
  const isHotel = useIsHotel();
  const { roomName } = useParams();
  const navigate = useNavigate();
  const [prices, setPrices] = useState([]);
  const [nonRefundableDiscount, setNonRefundableDiscount] = useState('');
  const [weeklyPlanDiscount, setWeeklyPlanDiscount] = useState('');

  const {
    // data: content,
    // error: contentError,
    isFetching
  } = useQuery({
    queryKey: [
      isHotel ? ['hotel-room', roomName] : ['apartment'],
      propertyId,
      [
        isHotel ? 'price' : 'prices',
        'nonRefundableDiscount',
        'weeklyPlanDiscount'
      ]
    ],
    enabled: propertyId?.length === 24,
    initialData: {},
    queryFn: async ({ queryKey }) => {
      const res = isHotel
        ? await findHotelRoom(propertyId, roomName, queryKey[2].join(' '))
        : await findApartment(propertyId, queryKey[2].join(' '));
      console.log({ res });
      const content = isHotel ? res?.data?.room : res?.data?.apartment;
      if (!isHotel) {
        content?.prices?.length && setPrices(content.prices);
        content?.nonRefundableDiscount ??
          setNonRefundableDiscount(content.nonRefundableDiscount);
        content?.weeklyPlanDiscount ??
          setWeeklyPlanDiscount(content.weeklyPlanDiscount);
      } else {
        setNonRefundableDiscount(content.nonRefundableDiscount);
        setWeeklyPlanDiscount(content.weeklyPlanDiscount);
      }
      return content;
    }
  });

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      if (!prices?.length && !isHotel) {
        toast.error('Please provide pricing');
        return;
      }
      if (isHotel) {
        const data = {
          roomName,
          propertyId,
          weeklyPlanDiscount,
          nonRefundableDiscount
        };
        await api.put(`/hotel-rooms`, data);
        navigate(`/hotel/${propertyId}/${roomName}/cancellation-policy`);
      } else {
        const filteredPrices = prices?.filter(priceObj => priceObj?.price);
        const data = {
          propertyId,
          prices: filteredPrices,
          weeklyPlanDiscount: weeklyPlanDiscount || 0,
          nonRefundableDiscount: nonRefundableDiscount || 0
        };
        await api.put('/apartments', data);
        navigate(`/apartment/${propertyId}/cancellation-policy`);
      }
    },
    onError: console.log
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Rate Plans
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Card>
                  <Typography.Paragraph style={{ marginBlock: 0 }}>
                    Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim
                    id diam nunc arcu tellus ornare. Sed diam pellentesque
                    sagittis nam. Tristique malesuada volutpat platea ut rhoncus
                    egestas dictum quam leo. Arcu montes bibendum purus tortor.
                    Eu arcu ac integer d.
                  </Typography.Paragraph>
                </Card>
                {!isHotel && (
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={4}>
                      Standard Rate Plan
                    </Typography.Title>
                    <Card>
                      {isFetching ? (
                        <Spin />
                      ) : (
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                              }}
                            >
                              <Typography.Title
                                level={5}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBlock: 0
                                }}
                              >
                                Cancellation Policy
                                <InfoCircleOutlined
                                  style={{ marginLeft: '0.5rem' }}
                                />
                              </Typography.Title>
                              <Button type="primary" ghost>
                                Edit
                              </Button>
                            </div>
                          </Space>
                          <Typography.Paragraph type="success">
                            Lorem ipsum dolor sit amet consectetur. Amet
                            vestibulum enim id diam nunc arcu tellus ornare. Sed
                            diam pellentesque sagittis nam. Tristique
                          </Typography.Paragraph>
                          <Checkbox.Group>
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Checkbox>
                                Lorem ipsum dolor sit amet consectetur
                              </Checkbox>
                              <Checkbox>
                                Lorem ipsum dolor sit amet consectetur
                              </Checkbox>
                            </Space>
                          </Checkbox.Group>
                          <Divider style={{ marginBlock: 0 }} />
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                              }}
                            >
                              <Typography.Title
                                level={5}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBlock: 0
                                }}
                              >
                                Price Per Group Size
                                <InfoCircleOutlined
                                  style={{ marginLeft: '0.5rem' }}
                                />
                              </Typography.Title>
                              <Button
                                type="primary"
                                ghost
                                onClick={() =>
                                  setPrices(ps => [
                                    ...ps,
                                    {
                                      occupancy: ps.length + 1,
                                      price: '',
                                      discountedPrice: ''
                                    }
                                  ])
                                }
                              >
                                Add
                              </Button>
                            </div>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr 25px'
                              }}
                            >
                              <h3>Occupacy</h3>
                              <h3>Guests Pay</h3>
                              <h3>Discounted Price</h3>
                            </div>
                            {prices?.map((priceObj, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: '1fr 1fr 1fr 25px'
                                }}
                              >
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px'
                                  }}
                                >
                                  <img
                                    src="/assets/images/user-icon.png"
                                    alt="occupancy"
                                    width={20}
                                  />
                                  <img
                                    src="/assets/images/times.png"
                                    alt="times"
                                    width={15}
                                  />
                                  <h4>{priceObj.occupancy}</h4>
                                </div>

                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                  }}
                                >
                                  <p>INR</p>
                                  <Input
                                    style={{ maxWidth: '100px' }}
                                    value={priceObj.price}
                                    onInput={e => {
                                      e.target.value = e.target.value.replace(
                                        /[^0-9]/g,
                                        ''
                                      );
                                    }}
                                    onChange={e => {
                                      setPrices(ps =>
                                        ps.map((priceObj, i) => {
                                          if (idx === i) {
                                            return {
                                              ...priceObj,
                                              price: e.target.value
                                            };
                                          }
                                          return priceObj;
                                        })
                                      );
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                  }}
                                >
                                  <Input
                                    style={{ maxWidth: '100px' }}
                                    value={priceObj.discountedPrice}
                                    onInput={e =>
                                      (e.target.value = e.target.value.replace(
                                        /[^0-9]/g,
                                        ''
                                      ))
                                    }
                                    onChange={e => {
                                      setPrices(ps =>
                                        ps.map((priceObj, i) => {
                                          if (idx === i) {
                                            return {
                                              ...priceObj,
                                              discountedPrice: e.target.value
                                            };
                                          }
                                          return priceObj;
                                        })
                                      );
                                    }}
                                  />
                                </div>
                                <CgRemove
                                  onClick={() => {
                                    setPrices(ps =>
                                      ps.filter((_, i) => i !== idx)
                                    );
                                  }}
                                  style={{
                                    heigth: '30px',
                                    width: 'fit-content',
                                    cursor: 'pointer'
                                  }}
                                />
                              </div>
                            ))}
                          </Space>
                          <Typography.Paragraph type="success">
                            Lorem ipsum dolor sit amet consectetur. Amet
                            vestibulum enim id diam nunc arcu tellus ornare. Sed
                            diam pellentesque sagittis nam. Tristique
                          </Typography.Paragraph>
                        </Space>
                      )}
                    </Card>
                  </Space>
                )}
                {isFetching ? (
                  <Spinner />
                ) : (
                  <>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4}>
                        Non-Refundable Rate Plan
                      </Typography.Title>
                      <Card>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                              }}
                            >
                              <Typography.Title
                                level={5}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBlock: 0
                                }}
                              >
                                Discount on Non-refundable Bookings
                                <InfoCircleOutlined
                                  style={{ marginLeft: '0.5rem' }}
                                />
                              </Typography.Title>

                              {/* <Button type="primary" ghost>
                            Edit
                          </Button> */}
                            </div>
                            <div
                              style={{
                                width: 'fit-content',
                                position: 'relative',
                                marginTop: '10px'
                              }}
                            >
                              <AiOutlinePercentage
                                style={{
                                  position: 'absolute',
                                  top: '50%',
                                  right: '10px',
                                  transform: 'translateY(-50%)',
                                  zIndex: '10',
                                  background: '#fff'
                                }}
                              />
                              <Input
                                size="large"
                                onInput={e => {
                                  e.target.value = e.target.value.replace(
                                    /[^0-9]/g,
                                    ''
                                  );
                                }}
                                value={nonRefundableDiscount}
                                style={{
                                  maxWidth: '75px'
                                }}
                                onChange={e => {
                                  if (e.target.value > 100) {
                                    toast.error(
                                      "Non-refundable discount can't be more than 100%"
                                    );
                                    return;
                                  }
                                  setNonRefundableDiscount(e.target.value);
                                }}
                                controls={false}
                              />
                            </div>
                          </Space>

                          {/* <Checkbox.Group>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                        </Space>
                      </Checkbox.Group> */}
                        </Space>
                      </Card>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4}>
                        Weekly Rate Plan
                      </Typography.Title>
                      <Card>
                        <Space
                          direction="vertical"
                          size="large"
                          style={{ width: '100%' }}
                        >
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                              }}
                            >
                              <Typography.Title
                                level={5}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBlock: 0
                                }}
                              >
                                Discount on Weekly Bookings
                                <InfoCircleOutlined
                                  style={{ marginLeft: '0.5rem' }}
                                />
                              </Typography.Title>
                              {/* <Button type="primary" ghost>
                            Edit
                          </Button> */}
                            </div>
                            <div
                              style={{
                                width: 'fit-content',
                                position: 'relative',
                                marginTop: '10px'
                              }}
                            >
                              <AiOutlinePercentage
                                style={{
                                  position: 'absolute',
                                  top: '50%',
                                  right: '10px',
                                  transform: 'translateY(-50%)',
                                  zIndex: '10',
                                  background: '#fff'
                                }}
                              />
                              <Input
                                size="large"
                                onInput={e => {
                                  e.target.value = e.target.value.replace(
                                    /[^0-9]/g,
                                    ''
                                  );
                                }}
                                style={{
                                  maxWidth: '75px'
                                }}
                                value={weeklyPlanDiscount}
                                onChange={e => {
                                  if (e.target.value > 100) {
                                    toast.error(
                                      "Weekly discount can't be more than 100%"
                                    );
                                    return;
                                  }
                                  setWeeklyPlanDiscount(e.target.value);
                                }}
                                controls={false}
                              />
                            </div>
                          </Space>
                          <Typography.Paragraph type="success">
                            Lorem ipsum dolor sit amet consectetur. Amet
                            vestibulum enim id diam nunc arcu tellus ornare. Sed
                            diam pellentesque sagittis nam. Tristique
                          </Typography.Paragraph>
                        </Space>
                      </Card>
                    </Space>
                  </>
                )}
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
                    disabled={status === 'pending' || isFetching}
                    onClick={mutate}
                  >
                    Continue
                  </Button>
                </CardBottom>
              </Space>
            </Col>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    <Space
                      size="middle"
                      direction="horizontal"
                      style={{ alignItems: 'flex-start', width: '100%' }}
                    >
                      <Typography.Text style={{ fontSize: '2rem' }}>
                        <InfoCircleOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          Rules for setting up a promotion
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet. Lorem eget vivamus id et lacus nulla
                          risus adipiscing molestie.{' '}
                          <Typography.Link>Learn More</Typography.Link>
                        </Typography.Paragraph>
                      </Space>
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      />
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Charge;
