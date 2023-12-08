import {
  CalendarOutlined,
  CheckCircleOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, MainWrapper } from 'src/components/Global';

const Complete = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();

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
                          Some important info before listing your property on
                          Loger.ma
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
                              style={{ marginBottom: 0 }}
                            >
                              Lorem ipsum dolor sit amet consectetur.?
                            </Typography.Title>
                            <Typography.Paragraph style={{ marginBottom: 0 }}>
                              Lorem ipsum dolor sit amet consectetur. Eget non
                              ac nascetur facilisi arcu integer ut. Eget lectus
                              amet ipsum pellentesque leo ac. Vulputate eget in
                              tortor orci quam ultricies viverra. Integer nulla
                              netus .
                            </Typography.Paragraph>
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
                              style={{ marginBottom: 0 }}
                            >
                              Lorem ipsum dolor sit amet consectetur.?
                            </Typography.Title>
                            <Typography.Paragraph style={{ marginBottom: 0 }}>
                              Lorem ipsum dolor sit amet consectetur. Eget non
                              ac nascetur facilisis.
                            </Typography.Paragraph>
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
                              style={{ marginBottom: 0 }}
                            >
                              Lorem ipsum dolor sit amet consectetur.?
                            </Typography.Title>
                            <Typography.Paragraph style={{ marginBottom: 0 }}>
                              Lorem ipsum dolor sit amet consectetur. Eget non
                              ac nascetur facilisis.
                            </Typography.Paragraph>
                          </Space>
                        </Space>
                      </Space>
                    </Space>
                    <Space
                      size="middle"
                      direction="vertical"
                      style={{ width: '100%' }}
                    >
                      <Checkbox>
                        Lorem ipsum dolor sit amet consectetur.
                      </Checkbox>
                      <Checkbox>
                        Lorem ipsum dolor sit amet consectetur.
                      </Checkbox>
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
                      // navigate(`/apartment/${propertyId}/Payment`);
                      navigate(`/payment-details`);
                    }}
                  >
                    Open for bookings
                  </Button>
                  <Button
                    size="large"
                    type="link"
                    block
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    I'm not ready
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
