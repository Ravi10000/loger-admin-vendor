import { Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const media = {
  mapImg: '/assets/images/map-img.png'
};

const Location = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
          Pin the location of your Property
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Typography.Title level={4} style={{ marginBottom: 0 }}>
                      Location
                    </Typography.Title>
                    <Typography.Text>
                      <EnvironmentOutlined style={{ marginRight: '0.5rem' }} />
                      Mahipal Khandari, near Ramaya Inn, Haridwar, Pin
                      Code:249410, Haridwar, India
                    </Typography.Text>
                  </Space>
                  <img src={media.mapImg} alt="" />
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
                        navigate('/hotel/property');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/property-detail');
                      }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Location;
