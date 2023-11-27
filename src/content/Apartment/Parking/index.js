import { Button, Card, Col, Radio, Row, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Parking = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Tell us about the parking situtaion at your apartment
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Is Parking Available to Guests?
                    </Typography.Title>
                    <Radio.Group
                    // onChange={handleAllowChild}
                    // value={allowChild}
                    >
                      <Space direction="vertical" style={{}}>
                        <Radio value={1}>Yes, free</Radio>
                        <Radio value={2}>Yes, Paid</Radio>
                        <Radio value={3}>No</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Do guests need to reserve a parking spot?
                    </Typography.Title>
                    <Radio.Group
                    // onChange={handleAllowChild}
                    // value={allowChild}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Radio value={1}>Reservation needed</Radio>
                        <Radio value={2}>No reservation needed</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Where is the parking located?
                    </Typography.Title>
                    <Radio.Group
                    // onChange={handleAllowChild}
                    // value={allowChild}
                    >
                      <Space direction="vertical" style={{}}>
                        <Radio value={1}>On site</Radio>
                        <Radio value={2}>Off site</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      What type of Parking is it?
                    </Typography.Title>
                    <Radio.Group
                    // onChange={handleAllowChild}
                    // value={allowChild}
                    >
                      <Space direction="vertical" style={{}}>
                        <Radio value={1}>Private </Radio>
                        <Radio value={2}>Public</Radio>
                      </Space>
                    </Radio.Group>
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
                        navigate('/apartment/breakfast-detail');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/apartment/language');
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

export default Parking;
