import {
  Button,
  Card,
  Col,
  Row,
  Segmented,
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
                      How many days before arrival can guests cancel their
                      booking for free?
                    </Typography.Title>
                    <Segmented
                      options={['1 days', '5 days', '14 days', '30 days']}
                    />
                    <Typography.Paragraph>
                      <Space
                        style={{ alignItems: 'flex-start', width: '100%' }}
                        size="middle"
                      >
                        <InfoCircleOutlined />
                        <Typography.Text>
                          Lorem ipsum dolor sit amet consectetur. Eget non ac
                          nascetur facilisi arcu integer ut. Eget lectus amet
                          ipsum pellentesque leo ac. Vulputate eget in tortor
                          orci quam ultricies viverra. Integer nulla netus
                          elementum quam suscipit eu imperdiet porttitor. Tellus
                          nam sed tortor erat non tempor et. Senectus sed sit
                          ornare et imperdiet.
                        </Typography.Text>
                      </Space>
                    </Typography.Paragraph>
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
                        navigate('/apartment/plans');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        // navigate('/apartment/host-profile');
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
