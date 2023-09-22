import {
  CalendarOutlined,
  CheckCircleOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainWrapper } from 'src/components/Global';

const Complete = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            That's it! You've Done Everything You Need to Before You First Guest
            Stays
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Space
                direction="vertical"
                style={{ width: '100%' }}
                size="large"
              >
                <Card>
                  <Space
                    size="large"
                    direction="vertical"
                    style={{ width: '100%' }}
                  >
                    <Space
                      size="middle"
                      direction="vertical"
                      style={{ width: '100%' }}
                    >
                      <Typography.Text>
                        <b>
                          After you finish your registration you’ll be able to:
                        </b>
                      </Typography.Text>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Space
                          size="middle"
                          style={{ alignItems: 'flex-start' }}
                        >
                          <CalendarOutlined />
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: '2.5rem' }}
                            >
                              Manage your property from dashboard
                            </Typography.Title>
                          </Space>
                        </Space>
                        <Space
                          size="middle"
                          style={{ alignItems: 'flex-start' }}
                        >
                          <CheckCircleOutlined />
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: '2.5rem' }}
                            >
                              Get booking and make money from guests browsing
                              our site
                            </Typography.Title>
                          </Space>
                        </Space>
                        <Space
                          size="middle"
                          style={{ alignItems: 'flex-start' }}
                        >
                          <UserOutlined />
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title
                              level={5}
                              style={{ marginBottom: '2.5rem' }}
                            >
                              Stay on top of bookings from all the sites you use
                              by syncing your calendar
                            </Typography.Title>
                          </Space>
                        </Space>
                      </Space>
                    </Space>
                    <Space
                      size="middle"
                      direction="vertical"
                      style={{ width: '100%' }}
                    >
                      <Space
                        direction="horizontal"
                        size="large"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Checkbox></Checkbox>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Eget non ac
                          nascetur facilisi arcu integer ut. Eget lectus amet
                          ipsum pellentesque leo ac. Vulputate eget in tortor
                          orci quam ultricies viverra. Integer nulla netus .
                        </Typography.Paragraph>
                      </Space>
                      <Space
                        direction="horizontal"
                        size="large"
                        style={{
                          width: '100%',
                          
                          alignItems: 'flex-start'
                        }}
                      >
                        <Checkbox></Checkbox>
                        Lorem ipsum dolor sit amet consectetur. Eget General
                        delivery Terms.
                      </Space>
                    </Space>
                  </Space>
                </Card>
                <Space
                  size="middle"
                  direction="vertical"
                  style={{ width: '100%' }}
                >
                  <Button
                    size="large"
                    type="primary"
                    block
                    onClick={() => {
                        navigate('/hotel/payment');
                    }}
                  >
                    Complete Registration & Open Bookings
                  </Button>
                  <Button
                    size="large"
                    type="link"
                    block
                    onClick={() => {
                      navigate('/hotel/hotelinfo');
                    }}
                  >
                    Complete Registration & open Later
                  </Button>
                </Space>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Complete;
