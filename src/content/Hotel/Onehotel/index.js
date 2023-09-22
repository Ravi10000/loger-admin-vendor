import {
  CalendarOutlined,
  ArrowLeftOutlined,
  CheckCircleOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography, Divider } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainWrapper } from 'src/components/Global';
import { CardBottom } from 'src/components/Global';
const media = {
  checkIcon: '/assets/images/hotel-img-2.png',
  checkIco: '/assets/images/hotel-img-3.png'
};

const Hotelinfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} xl={22} xxl={8}>
              <Space
                direction="vertical"
                style={{ width: '100%' }}
                size="large"
              >
                <Card>
                  <Typography.Text
                    style={{ marginBottom: '2.5rem', marginLeft: '4.1rem' }}
                  >
                    Step 1
                  </Typography.Text>
                  <Space
                    direction="horizontal"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <img src={media.checkIcon} alt="" />
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size="large"
                    >
                      <Typography.Title
                        level={5}
                        style={{ marginBottom: '-2.5rem' }}
                      >
                        Property details
                      </Typography.Title>
                      <Typography.Paragraph>
                        The basics .Add your property name , address ,
                        facilities , and room more.
                      </Typography.Paragraph>
                    </Space>
                    <Typography.Title
                      style={{ color: 'blue', marginLeft: '36rem' }}
                      level={5}
                    >
                      Edit
                    </Typography.Title>
                  </Space>
                </Card>
                <Card>
                  <Typography.Text
                    style={{ marginBottom: '2.5rem', marginLeft: '4.1rem' }}
                  >
                    Step 2
                  </Typography.Text>
                  <Space
                    direction="horizontal"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <img src={media.checkIcon} alt="" />
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size="large"
                    >
                      <Typography.Title
                        level={5}
                        style={{ marginBottom: '-2.5rem' }}
                      >
                        Property details
                      </Typography.Title>
                      <Typography.Paragraph>
                        Add another room to add new layouts, bed options, and
                        room rates.
                      </Typography.Paragraph>
                    </Space>
                    <Typography.Title
                      style={{ color: 'blue', marginLeft: '38rem' }}
                      level={5}
                    >
                      Edit
                    </Typography.Title>
                  </Space>
                  <Space
                    direction="horizontal"
                    style={{ width: '100%' }}
                    size="large"
                    align="flex-start"
                  >
                    <img
                      src={media.checkIco}
                      style={{ marginTop: '1.8rem' }}
                      alt=""
                    />
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size="large"
                    >
                      <Typography.Title
                        level={5}
                        style={{ marginBottom: '2rem', marginTop: '1.8rem' }}
                      >
                        Double Room
                      </Typography.Title>
                      <Space
                        direction="horizontal"
                        style={{ width: '100%' }}
                        size="large"
                      >
                        <Space direction="vertical" style={{ width: '200%' }}>
                          <Typography.Title
                            style={{ marginBottom: '-.5rem' }}
                            level={5}
                          >
                            Guests
                          </Typography.Title>
                          <Typography.Text>2</Typography.Text>
                        </Space>
                        <Divider type="vertical" />
                        <Space direction="vertical" style={{ width: '200%' }}>
                          <Typography.Title
                            style={{ marginBottom: '-.5rem' }}
                            level={5}
                          >
                            Beds
                          </Typography.Title>
                          <Typography.Text>2</Typography.Text>
                        </Space>
                        <Divider type="vertical" />
                        <Space direction="vertical" style={{ width: '200%' }}>
                          <Typography.Title
                            style={{ marginBottom: '-.5rem' }}
                            level={5}
                          >
                            Bathrooms
                          </Typography.Title>
                          <Typography.Text>Private</Typography.Text>
                        </Space>
                        <Divider type="vertical" />
                        <Space direction="vertical" style={{ width: '200%' }}>
                          <Typography.Title
                            style={{ marginBottom: '-.5rem' }}
                            level={5}
                          >
                            Price
                          </Typography.Title>
                          <Typography.Text>$2000</Typography.Text>
                        </Space>
                        <Divider type="vertical" />
                        <Space direction="vertical" style={{ width: '200%' }}>
                          <Typography.Title
                            style={{ marginBottom: '-.5rem' }}
                            level={5}
                          >
                            Room of this type
                          </Typography.Title>
                          <Typography.Text>1</Typography.Text>
                        </Space>
                        <Space
                          direction="horizontal"
                          style={{
                            width: '200%',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Typography.Title
                            style={{ color: 'blue', marginLeft: '5rem' }}
                            level={5}
                          >
                            Delete
                          </Typography.Title>
                          <Typography.Title
                            style={{ color: 'blue', marginLeft: '' }}
                            level={5}
                          >
                            Edit
                          </Typography.Title>
                        </Space>
                      </Space>
                    </Space>
                  </Space>
                </Card>
                <Card>
                  <Typography.Text style={{ marginBottom: '5rem' }}>
                    Step 3
                  </Typography.Text>
                  <Space
                    direction="horizontal"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size="large"
                    >
                      <Typography.Title
                        level={5}
                        style={{ marginBottom: '-2.5rem' }}
                      >
                        Photos
                      </Typography.Title>
                      <Typography.Paragraph>
                        Share some photos of your property so guests know what
                        to expect.
                      </Typography.Paragraph>
                    </Space>
                    <Button
                      type="primary"
                      style={{
                        marginLeft: '35rem'
                      }}
                    >
                      Add Photos
                    </Button>
                  </Space>
                </Card>
                <Card>
                  <Typography.Text style={{ marginBottom: '5rem' }}>
                    Step 4
                  </Typography.Text>
                  <Space
                    direction="horizontal"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size="large"
                    >
                      <Typography.Title
                        level={5}
                        style={{ marginBottom: '-2.5rem' }}
                      >
                        Final Steps
                      </Typography.Title>
                      <Typography.Paragraph>
                        Set Up Payments and Invoicing Before You Open for
                        Bookings.
                      </Typography.Paragraph>
                    </Space>
                    <Button style={{ marginLeft: '36rem', color: 'blue' }}>
                      Complete Registration
                    </Button>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Hotelinfo;
