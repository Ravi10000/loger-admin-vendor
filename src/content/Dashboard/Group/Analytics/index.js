import React from 'react';
import { Card, Col, Row, Space, Typography } from 'antd';
import { Container, MainWrapper } from 'src/components/Global';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const Analytics = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2}>Analytics</Typography.Title>
          <Typography.Text>
            Analyze Existing Booking to Plan for the Future
          </Typography.Text>
          <Row gutter={[32, 32]}>
            <Col xs={24} xl={20} xxl={8}>
              <Card style={{ marginTop: '2.5rem' }}>
                <space direction="horizontal">
                  <ExclamationCircleOutlined />
                  <Typography.Text style={{ marginLeft: '2.5rem' }}>
                    Something went wrong when we tried to load your report- try
                    again .
                  </Typography.Text>
                </space>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Analytics;
