import {
  ArrowLeftOutlined,
  CheckOutlined,
  CloseOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Input,
  Row,
  Select,
  Space,
  Typography,
  Spin
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';
import { useQuery, useMutation } from '@tanstack/react-query';
import api from 'src/api';
import { findApartment, updateProperty } from 'src/api/property.req';
import { toast } from 'react-hot-toast';

const options = [
  {
    value: 'INR',
    label: 'INR'
  },
  {
    value: 'USD',
    label: 'USD'
  }
];

const Charge = () => {
  const { propertyId } = useParams();

  const navigate = useNavigate();
  const theme = useTheme();
  const [price, setPrice] = useState('');
  const {
    data: apartment,
    error: apartmentError,
    isFetching
  } = useQuery({
    queryKey: ['apartment', propertyId, ['prices']],
    enabled: propertyId?.length === 24,
    initialData: {},
    queryFn: async () => {
      const res = await findApartment(propertyId, 'prices');
      const apartment = res?.data?.apartment;
      if (apartment?.prices?.length) {
        const occupancy1Price = apartment.prices.find(
          priceObj => priceObj.occupancy === 1
        )?.price;
        if (occupancy1Price) {
          setPrice(occupancy1Price);
        }
      }
      return apartment;
    }
  });

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      if (!price) {
        toast.error('Please enter price for ocupancy 1');
        return;
      }
      const apartmentPrices = apartment?.prices.filter(
        priceObj => priceObj.occupancy !== 1
      );
      const data = {
        propertyId,
        prices: [
          {
            occupancy: 1,
            price: parseFloat(price),
            discountedPrice: parseFloat(price)
          },
          ...apartmentPrices
        ]
      };
      const res = await api.put('/apartments', data);
      console.log({ res });
      navigate(`/apartment/${propertyId}/plans`);
    },
    onError: console.error
  });

  // useEffect(() => {
  //   if (property?.apartment) {
  //     const occupancy1Price = property.apartment.prices.find(
  //       priceObj => priceObj.occupancy === 1
  //     )?.price;
  //     if (occupancy1Price) {
  //       setPrice(occupancy1Price);
  //     }
  //   }
  // }, [property]);

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            How Much Do You Want to Charge Per Night?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
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
                        <Typography.Title level={5}>
                          Price guests pay
                        </Typography.Title>
                        <Space.Compact style={{ width: '100%' }}>
                          <Select
                            style={{ width: 'auto' }}
                            size="large"
                            defaultValue="INR"
                            options={options}
                          />
                          <Input
                            size="large"
                            value={price}
                            onChange={e => {
                              if (!isNaN(e.target.value))
                                setPrice(e.target.value);
                            }}
                          />
                        </Space.Compact>
                        <Typography.Text>
                          Including taxes, commsion and charges
                        </Typography.Text>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Price guests pay
                        </Typography.Title>
                        <ul style={{ listStyle: 'none' }}>
                          <li>
                            <Typography.Paragraph>
                              <CheckOutlined style={{ marginRight: '1rem' }} />
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              <CheckOutlined style={{ marginRight: '1rem' }} />
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              <CheckOutlined style={{ marginRight: '1rem' }} />
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              <CheckOutlined style={{ marginRight: '1rem' }} />
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                        </ul>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Typography.Text>
                        <Typography.Text
                          style={{ color: theme.antd.colorPrimary }}
                        >
                          INR 400.00
                        </Typography.Text>{' '}
                        Your earning(including taxes)
                      </Typography.Text>
                    </Space>
                  )}
                </Card>
                <Card>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Checkbox>
                      <Typography.Title level={5} style={{ marginBlock: 0 }}>
                        Get guests attention with a 20% discount
                      </Typography.Title>
                    </Checkbox>
                    <Typography.Text>
                      Give 20 % off on your 3 booking or 90 days, whichever
                      comes first. <Typography.Link>Learn More</Typography.Link>
                    </Typography.Text>
                    <Divider style={{ marginBlock: '0.5rem' }} />
                    <Typography.Text type="">
                      <Typography.Text
                        style={{ color: theme.antd.colorPrimary }}
                        delete
                      >
                        INR 2000.00
                      </Typography.Text>{' '}
                      <Typography.Text type="success">
                        INR 800 Per night
                      </Typography.Text>
                    </Typography.Text>
                  </Space>
                </Card>
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
                    // onClick={() => {
                    //   navigate('/apartment/plans');
                    // }}
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