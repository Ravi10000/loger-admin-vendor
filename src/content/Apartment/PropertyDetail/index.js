import {
  Button,
  Card,
  Col,
  InputNumber,
  Radio,
  Row,
  Space,
  Typography
} from 'antd';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  MinusOutlined,
  PlusOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';

const MainWrapper = styled.div`
  padding-top: 3.5rem;
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const CardBottom = styled(Space)`
  display: flex;
  width: 100%;

  .ant-space-item:last-child {
    flex: 1;
  }
`;

const ControlButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PropertyDetail = () => {
  const navigate = useNavigate();

  const [allowChild, setAllowChild] = useState(1);
  const [allowCribs, setAllowCribs] = useState(1);
  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [numberOfBathroom, setNumberOfBathroom] = useState(0);

  const handleAllowChild = e => {
    setAllowChild(e.target.value);
  };

  const handleAllowCribs = e => {
    setAllowCribs(e.target.value);
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Property Details
          </Typography.Title>
          <Row>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: '100%' }}
                    >
                      <Typography.Title level={5}>
                        Where can people sleep ?
                      </Typography.Title>
                      <Card size="small">
                        <Space direction="vertical">
                          <Typography.Text>
                            <b>Bedroom 1</b>
                          </Typography.Text>
                          <Typography.Text type="secondary">
                            1 double bed
                          </Typography.Text>
                        </Space>
                      </Card>
                      <Card size="small">
                        <Space direction="vertical">
                          <Typography.Text>
                            <b>Living room</b>
                          </Typography.Text>
                          <Typography.Text type="secondary">
                            1 double bed
                          </Typography.Text>
                        </Space>
                      </Card>
                      <Card size="small">
                        <Space direction="vertical">
                          <Typography.Text>
                            <b>Other spaces</b>
                          </Typography.Text>
                          <Typography.Text type="secondary">
                            1 double bed
                          </Typography.Text>
                        </Space>
                      </Card>
                      <Button
                        type="primary"
                        ghost
                        icon={<PlusCircleOutlined />}
                      >
                        Add Bedroom
                      </Button>
                    </Space>
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Do you allow children?
                        </Typography.Title>
                        <Radio.Group
                          onChange={handleAllowChild}
                          value={allowChild}
                        >
                          <Radio value={1}>Yes</Radio>
                          <Radio value={2}>No</Radio>
                        </Radio.Group>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Do you offer cribs?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Cribs sleep most infants 0-3 years old and are
                          available to guests on request.
                        </Typography.Paragraph>
                        <Radio.Group
                          onChange={handleAllowCribs}
                          value={allowCribs}
                        >
                          <Radio value={1}>Yes</Radio>
                          <Radio value={2}>No</Radio>
                        </Radio.Group>
                      </Space>
                    </Space>
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        How big is this apartment?
                      </Typography.Title>
                      <Typography.Paragraph>
                        Apartment size - optional
                      </Typography.Paragraph>
                      <InputNumber
                        size="large"
                        addonAfter="sq"
                        defaultValue={100}
                      />
                    </Space>
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          How many guests can stay ?
                        </Typography.Title>
                        <Space.Compact>
                          <ControlButton
                            icon={
                              <MinusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => setNumberOfGuest(prev => --prev)}
                          />
                          <InputNumber
                            onChange={setNumberOfGuest}
                            min={0}
                            value={numberOfGuest}
                            controls={false}
                            style={{ width: '3rem', textAlign: 'center' }}
                          />
                          <ControlButton
                            icon={
                              <PlusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => setNumberOfGuest(prev => ++prev)}
                          />
                        </Space.Compact>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          How many bathrooms are there ?
                        </Typography.Title>
                        <Space.Compact>
                          <ControlButton
                            icon={
                              <MinusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => setNumberOfBathroom(prev => --prev)}
                          />
                          <InputNumber
                            onChange={setNumberOfBathroom}
                            min={0}
                            value={numberOfBathroom}
                            controls={false}
                            style={{ width: '3rem', textAlign: 'center' }}
                          />
                          <ControlButton
                            icon={
                              <PlusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => setNumberOfBathroom(prev => ++prev)}
                          />
                        </Space.Compact>
                      </Space>
                    </Space>
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card>
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
                          navigate('/apartment/location');
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        size="large"
                        type="primary"
                        block
                        onClick={() => {
                          navigate('/apartment/breakfast-detail');
                        }}
                      >
                        Continue
                      </Button>
                    </CardBottom>
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

export default PropertyDetail;
