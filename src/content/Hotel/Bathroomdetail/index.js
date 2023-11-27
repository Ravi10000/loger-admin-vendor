import { Button, Card, Col, Radio, Row, Space, Typography } from 'antd';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'antd';
import {
  ArrowLeftOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Bathroomdetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Bathroom Details
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
                      Is the Bathroom Private?
                    </Typography.Title>
                    <Radio.Group>
                      <Space direction="vertical">
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No, it's shared</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      What Bathroom Items are Available in This Room?
                    </Typography.Title>
                    <Checkbox.Group>
                      <Space direction="vertical">
                        <Checkbox>Toilet paper</Checkbox>
                        <Checkbox>Shower</Checkbox>
                        <Checkbox>Toilet</Checkbox>
                        <Checkbox>Hairdryer</Checkbox>
                        <Checkbox>Bathtub</Checkbox>
                        <Checkbox>Free toiletries</Checkbox>
                        <Checkbox>Bidget</Checkbox>
                        <Checkbox>Slippers</Checkbox>
                        <Checkbox>Bathrobe</Checkbox>
                        <Checkbox>Spa tub</Checkbox>
                      </Space>
                    </Checkbox.Group>
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
                        navigate('/hotel/room-detail');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/room');
                      }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
              </Card>
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
                        <BulbOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          Still Deciding ?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet.
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

export default Bathroomdetail;
