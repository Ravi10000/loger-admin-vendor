import { Button, Card, Col, Form, Input, Row, Space, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import {
  ArrowLeftOutlined,
  LikeOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import api from 'src/api';

const Place = () => {
  const navigate = useNavigate();

  const apartmentMutation = useMutation({
    mutationFn: async () => {
      const res = await api.post('/properties', {
        propertyType: 'apartment',
        propertyName: 'Test'
      });
    }
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            What's the name of your place?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Form layout="vertical">
                  <Form.Item
                    label="Property Name"
                    rules={[
                      { required: true, message: 'Property name required' }
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
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
                        navigate('/apartment/listing');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      // onClick={() => {
                      //   navigate('/apartment/property');
                      // }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Form>
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
                        <LikeOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          What should I consider when choosing a name?
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
                        </ul>
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
                          Why do I need to name my property?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet. Lorem eget vivamus id et lacus nulla
                          risus adipiscing molestienulla risus adipiscing
                          molestie. mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie..
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

export default Place;
