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
const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
};

const Availability = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Invoicing
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
                    Lorem ipsum dolor sit amet consectetur. Eget non ac nascetur
                    facilisi arcu integer ut. Eget lectus amet ipsum
                    pellentesque leo ac. Vulputate eget in tortor orci quam
                    ultricies viverra. Integer nulla netus elementum quam
                    suscipit eu imperdiet porttitor. Tellus nam sed tortor erat
                    non tempor et. Senectus sed sit ornare et imperdiet. Enim
                    semper odio massa lobortis. Mattis amet tempor cursus ipsum
                    nec .
                  </Typography.Paragraph>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Do you use a channel manager?
                    </Typography.Title>
                    <Radio.Group>
                      <Space direction="vertical" style={{}}>
                        <Radio value={1}>Lorem ipsum</Radio>
                        <Radio value={2}>Lorem ipsum</Radio>
                        <Radio value={3}>Lorem ipsum</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                    Does this recipient have the same address as your property ?
                    </Typography.Title>
                    <Radio.Group>
                      <Space direction="vertical" style={{}}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                        
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
                        navigate('/hotel/gallery');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/guestpayment');
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

export default Availability;
