import {
  Button,
  Card,
  Col,
  Radio,
  Row,
  Segmented,
  Select,
  Space,
  Switch,
  Typography
} from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  CloseOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Policy = () => {
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
            Cancellation Policies
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Space
                    size="large"
                    direction="vertical"
                    style={{ width: '100%' }}
                  >
                    <Typography.Title level={5}>
                      When can the guests cancel their bookings for free ?
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
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      How much are guests charged if they cancel after the
                      cancellation window ( before 6 pm on the day of arrival )
                      ?
                    </Typography.Title>
                    <Radio.Group>
                      <Space direction="vertical" style={{}}>
                        <Radio value={1}>Cost of The First Night</Radio>
                        <Radio value={2}>100% Of the Total Price</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Protection against accidental bookings
                    </Typography.Title>
                    <Typography.Text
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <Switch size="small" />
                      On
                    </Typography.Text>
                    <Typography.Paragraph
                      type="secondary"
                      style={{ marginBlock: 0 }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Eget non ac
                      nascetur facilisi arcu integer ut. Eget lectus amet ipsum
                      pellentesque leo ac. Vulputate eget in tortor orci quam
                      ultricies viverra. Integer nulla netus
                    </Typography.Paragraph>
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
                        navigate('/hotel/plans');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                         navigate('/hotel/gallery');
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
                        <InfoCircleOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          What policy should I choose?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet. Lorem eget vivamus id et lacus nulla
                          risus adipiscing molestie.
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

export default Policy;
