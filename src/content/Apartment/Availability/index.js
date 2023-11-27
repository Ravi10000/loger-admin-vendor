import {
  ArrowLeftOutlined,
  CloseOutlined,
  BulbOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Radio, Row, Select, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Availability = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Availability
          </Typography.Title>
          <Space style={{ width: '100%' }} size="large" direction="vertical">
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      What's the first date when guests can check in?
                    </Typography.Title>
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction="vertical">
                        <Radio value={1}>As soon possible</Radio>
                        <Radio value={2}>On specific date</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                </Card>
              </Col>
            </Row>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <Typography.Paragraph style={{ marginBlock: 0 }}>
                      Lorem ipsum dolor sit amet consectetur. Eget non ac
                      nascetur facilisi arcu integer ut. Eget lectus amet ipsum
                      pellentesque leo ac. Vulputate eget in tortor orci quam
                      ultricies viverra. Integer nulla netus elementum quam
                      suscipit eu imperdiet porttitor. Tellus nam sed tortor
                      erat non tempor et. Senectus sed sit ornare et imperdiet.
                      Enim semper odio massa lobortis. Mattis amet tempor cursus
                      ipsum nec.
                    </Typography.Paragraph>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        Want to sync your availability with TripAdvisor?
                      </Typography.Title>
                      <Typography.Text type="success">
                        Lorem ipsum dolor sit amet consectetur. Eget non ac
                        nascetur facilisi arcu integer ut. Eget lectus amet
                        ipsum pellentesc .
                      </Typography.Text>
                    </Space>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Radio value={1}>
                            Lorem ipsum dolor sit amet consectetur.
                          </Radio>
                          <Radio value={2}>
                            Lorem ipsum dolor sit amet consectetur.
                          </Radio>
                          <Radio value={3}>
                            Lorem ipsum dolor sit amet consectetur.
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
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
                        Not ready to sync your availability right now?
                      </Typography.Title>
                      <Typography.Paragraph>
                        Lorem ipsum dolor sit amet consectetur. Non in quis ante
                        porttitor praesent volutpat neque. Metus in neque montes
                        id mattis molestie aliquet. Lorem eget vivamus id et
                        lacus nulla risus adipiscing molestie. mattis molestie
                        aliquet. Lorem eget vivamus id et lacus nulla risus
                        adipiscing molestie.
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
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
                <Card>
                  <Space
                    style={{ width: '100%' }}
                    direction="vertical"
                    size="large"
                  >
                    <Space style={{ width: '100%' }} direction="vertical">
                      <Typography.Title level={5}>
                        Do you want to allow 30+ night stays?
                      </Typography.Title>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. Eget non ac
                        nascetur facilisi arcu integer ut. Eget lectus amet
                        ipsum pellentesc.
                      </Typography.Text>
                    </Space>
                    <Space style={{ width: '100%' }} direction="vertical">
                      <Typography.Title level={5}>
                        Will you accept reservations for stays over 30 nights?
                      </Typography.Title>
                      <Radio.Group value={value} onChange={onChange}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                      </Radio.Group>
                    </Space>
                    <Space style={{ width: '100%' }} direction="vertical">
                      <Typography.Title level={5}>
                        What's the maximum number of nights you want guest able
                        to book?
                      </Typography.Title>
                      <Select
                        size="large"
                        style={{ width: '100%' }}
                        options={[
                          {
                            label: '90',
                            value: 90
                          },
                          {
                            label: '75',
                            value: 75
                          },
                          {
                            label: '60',
                            value: 60
                          },
                          {
                            label: '45',
                            value: 45
                          }
                        ]}
                      />
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
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
                        What if I want to change my selection later on?
                      </Typography.Title>
                      <Typography.Paragraph>
                        Lorem ipsum dolor sit amet consectetur. Non in quis ante
                        porttitor praesent volutpat neque. Metus in neque montes
                        id mattis molestie aliquet. Lorem eget vivamus id et
                        lacus nulla risus adipiscing molestie. mattis molestie
                        aliquet. Lorem eget vivamus id et lacus nulla risus
                        adipiscing molestie.
                      </Typography.Paragraph>
                      <Typography.Link>
                        Read more about 30+ night stays
                      </Typography.Link>
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
            <Row gutter={[32, 32]}>
              <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
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
                      navigate('/apartment/cancellation-policy');
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    size="large"
                    type="primary"
                    block
                    onClick={() => {
                      navigate('/apartment/review-and-complete');
                    }}
                  >
                    Continue
                  </Button>
                </CardBottom>
              </Col>
            </Row>
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Availability;
