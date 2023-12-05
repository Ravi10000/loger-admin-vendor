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
  Spin,
  InputNumber
} from 'antd';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useQuery, useMutation } from '@tanstack/react-query';
import api from 'src/api';
import { toast } from 'react-hot-toast';
import { AiOutlinePercentage } from 'react-icons/ai';
import { findApartment } from 'src/api/property.req';

const Charge = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [prices, setPrices] = useState([]);
  const [nonRefundableDiscount, setNonRefundableDiscount] = useState('');
  const [weeklyPlanDiscount, setWeeklyPlanDiscount] = useState('');

  const {
    data: apartment,
    error: apartmentError,
    isFetching
  } = useQuery({
    queryKey: [
      'apartment',
      propertyId,
      ['prices', 'nonRefundableDiscount', 'weeklyPlanDiscount']
    ],
    enabled: !!propertyId,
    initialData: {},
    queryFn: async ({ queryKey }) => {
      const res = await findApartment(propertyId, queryKey[2].join(' '));
      const apartment = res?.data?.apartment;
      if (apartment?.prices?.length) setPrices(apartment.prices);
      if (apartment?.nonRefundableDiscount)
        setNonRefundableDiscount(apartment.nonRefundableDiscount);
      if (apartment?.weeklyPlanDiscount)
        setWeeklyPlanDiscount(apartment.weeklyPlanDiscount);
      return apartment;
    }
  });

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      if (!prices?.length) {
        toast.error('Please provide pricing');
        return;
      }
      console.log(typeof nonRefundableDiscount);
      if (
        nonRefundableDiscount &&
        (typeof nonRefundableDiscount !== 'number' ||
          nonRefundableDiscount > 100)
      ) {
        toast.error(
          'Non-Refundable plan discount should be a discount less than 100'
        );
        return;
      }
      if (
        weeklyPlanDiscount &&
        (typeof weeklyPlanDiscount !== 'number' || weeklyPlanDiscount > 100)
      ) {
        toast.error('Weekly plan discount should be a discount less than 100');
        return;
      }
      const filteredPrices = prices?.filter(priceObj => priceObj?.price);
      const data = {
        propertyId,
        prices: filteredPrices,
        weeklyPlanDiscount: weeklyPlanDiscount || 0,
        nonRefundableDiscount: nonRefundableDiscount || 0
      };
      const res = await api.put('/apartments', data);
      console.log({ res });
      navigate(`/apartment/${propertyId}/cancellation-policy`);
    },
    onError: console.log
  });

  // console.log({ apartment });

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
                          <Space direction="vertical" style={{ width: '100%' }}>
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
                                            price: parseFloat(
                                              e?.target?.value?.length
                                                ? e.target.value
                                                : 0
                                            )
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
                                            discountedPrice: parseFloat(
                                              e.target.value
                                            )
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
                          <InputNumber
                            max={Infinity}
                            value={nonRefundableDiscount}
                            style={{ padding: '5px', fontSize: '20px' }}
                            onChange={value => {
                              console.log({ value });
                              if (typeof value !== 'number')
                                setNonRefundableDiscount(0);
                              else setNonRefundableDiscount(parseFloat(value));
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
                          <InputNumber
                            max={Infinity}
                            value={weeklyPlanDiscount}
                            style={{ padding: '5px', fontSize: '20px' }}
                            onChange={value => {
                              console.log({ value });
                              if (typeof value !== 'number')
                                setWeeklyPlanDiscount(0);
                              else setWeeklyPlanDiscount(parseFloat(value));
                            }}
                            controls={false}
                          />
                        </div>
                      </Space>
                      <Typography.Paragraph type="success">
                        Lorem ipsum dolor sit amet consectetur. Amet vestibulum
                        enim id diam nunc arcu tellus ornare. Sed diam
                        pellentesque sagittis nam. Tristique
                      </Typography.Paragraph>
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
