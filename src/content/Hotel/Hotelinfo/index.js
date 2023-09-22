import {
  CalendarOutlined,
  ArrowLeftOutlined,
  CheckCircleOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Card,  Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MainWrapper } from 'src/components/Global';
import { CardBottom } from 'src/components/Global';
const Hotelinfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Some Important Info Before You List Your Hotel on Loger.ma
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
                      navigate('/hotel/invoicing');
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    size="large"
                    type="primary"
                    block
                    onClick={() => {
                      navigate('/hotel/complete');
                    }}
                  >
                    Continue
                  </Button>
                </CardBottom>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Hotelinfo;
