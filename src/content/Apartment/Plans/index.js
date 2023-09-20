import {
  ArrowLeftOutlined,
  CloseOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Row,
  Space,
  Typography
} from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';

const Charge = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Rate Plans
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Card>
                  <Typography.Paragraph style={{ marginBlock: 0 }}>
                    Lorem ipsum dolor sit amet consectetur. Amet vestibulum enim
                    id diam nunc arcu tellus ornare. Sed diam pellentesque
                    sagittis nam. Tristique malesuada volutpat platea ut rhoncus
                    egestas dictum quam leo. Arcu montes bibendum purus tortor.
                    Eu arcu ac integer d.
                  </Typography.Paragraph>
                </Card>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4}>
                    Standard Rate Plan
                  </Typography.Title>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '0.5rem'
                          }}
                        >
                          <Typography.Title
                            level={5}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBlock: 0
                            }}
                          >
                            Cancellation Policy
                            <InfoCircleOutlined
                              style={{ marginLeft: '0.5rem' }}
                            />
                          </Typography.Title>
                          <Button type="primary" ghost>
                            Edit
                          </Button>
                        </div>
                      </Space>
                      <Typography.Paragraph type="success">
                        Lorem ipsum dolor sit amet consectetur. Amet vestibulum
                        enim id diam nunc arcu tellus ornare. Sed diam
                        pellentesque sagittis nam. Tristique
                      </Typography.Paragraph>
                      <Checkbox.Group>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                        </Space>
                      </Checkbox.Group>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '0.5rem'
                          }}
                        >
                          <Typography.Title
                            level={5}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBlock: 0
                            }}
                          >
                            Price Per Group Size
                            <InfoCircleOutlined
                              style={{ marginLeft: '0.5rem' }}
                            />
                          </Typography.Title>
                          <Button type="primary" ghost>
                            Edit
                          </Button>
                        </div>
                      </Space>
                      <Typography.Paragraph type="success">
                        Lorem ipsum dolor sit amet consectetur. Amet vestibulum
                        enim id diam nunc arcu tellus ornare. Sed diam
                        pellentesque sagittis nam. Tristique
                      </Typography.Paragraph>
                    </Space>
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4}>
                    Non-Refundable Rate Plan
                  </Typography.Title>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '0.5rem'
                          }}
                        >
                          <Typography.Title
                            level={5}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBlock: 0
                            }}
                          >
                            Price and Cancellation Policy
                            <InfoCircleOutlined
                              style={{ marginLeft: '0.5rem' }}
                            />
                          </Typography.Title>
                          <Button type="primary" ghost>
                            Edit
                          </Button>
                        </div>
                      </Space>
                      <Checkbox.Group>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                        </Space>
                      </Checkbox.Group>
                    </Space>
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4}>
                    Weekly Rate Plan
                  </Typography.Title>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '0.5rem'
                          }}
                        >
                          <Typography.Title
                            level={5}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              marginBlock: 0
                            }}
                          >
                            Price and cancellation
                            <InfoCircleOutlined
                              style={{ marginLeft: '0.5rem' }}
                            />
                          </Typography.Title>
                          <Button type="primary" ghost>
                            Edit
                          </Button>
                        </div>
                      </Space>
                      <Typography.Paragraph type="success">
                        Lorem ipsum dolor sit amet consectetur. Amet vestibulum
                        enim id diam nunc arcu tellus ornare. Sed diam
                        pellentesque sagittis nam. Tristique
                      </Typography.Paragraph>
                      <Checkbox.Group>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                          <Checkbox>
                            Lorem ipsum dolor sit amet consectetur
                          </Checkbox>
                        </Space>
                      </Checkbox.Group>
                    </Space>
                  </Card>
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
                      navigate('/apartment/charge');
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    size="large"
                    type="primary"
                    block
                    onClick={() => {
                      navigate('/apartment/cancellation-policy');
                    }}
                  >
                    Continue
                  </Button>
                </CardBottom>
              </Space>
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
                          Rules for setting up a promotion
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet. Lorem eget vivamus id et lacus nulla
                          risus adipiscing molestie.{' '}
                          <Typography.Link>Learn More</Typography.Link>
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

export default Charge;
