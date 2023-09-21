import { Button, Card, Col, Row, Space, Typography, Select } from 'antd';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Room = () => {
  const navigate = useNavigate();

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i
    });
  }
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            What’s the Name of this Room?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Typography.Paragraph>
                    Lorem ipsum dolor sit amet consectetur. Arcu mattis id
                    ultricies aliquam tincidunt nunc.
                  </Typography.Paragraph>
                  <Typography.Title level={4} style={{ marginBottom: '0rem' }}>
                    Room Name
                  </Typography.Title>
                  <Select
                    mode="multiple"
                    allowClear
                    size="large"
                    maxTagCount={6}
                    style={{ width: '100%' }}
                    placeholder=""
                    onChange={handleChange}
                    options={options}
                  />
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
                        navigate('/hotel/bathroomdetail');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/charge');
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
                          Why do I Need to Name My Property?
                        </Typography.Title>
                        <ul style={{ marginLeft: '1rem' }}>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                        </ul>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie
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

export default Room;
