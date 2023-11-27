import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  Typography,
  Radio
} from 'antd';
import { Rate } from 'antd';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';

const Rating = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Tell Us About Your Hotel
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
                      What's the name of your hotel?
                    </Typography.Title>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Paragraph style={{ marginBottom: '0rem' }}>
                        Property Name
                      </Typography.Paragraph>
                      <Select
                        size="large"
                        style={{
                          width: '100%'
                        }}
                        placeholder="Select Property Name"
                        options={[
                          {
                            value: '1',
                            label: 'Ravi'
                          },
                          {
                            value: '2',
                            label: 'Msa'
                          },
                          {
                            value: '3',
                            label: 'Taj'
                          },
                          {
                            value: '4',
                            label: 'Amj'
                          }
                        ]}
                      />
                      <Typography.Paragraph>
                        Guests will see this name when searching for a place to
                        stay.
                      </Typography.Paragraph>
                    </Space>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      What is the star rating of your hotel?
                    </Typography.Title>
                    <Radio.Group>
                      <Space direction="vertical">
                        <Radio value={1}>N/A</Radio>
                        <Radio value={2}>
                          <span style={{ marginRight: '0.5rem' }}>1 Star </span>
                          <Rate disabled defaultValue={1} count={1} />
                        </Radio>
                        <Radio value={3}>
                          <span style={{ marginRight: '0.5rem' }}>
                            2 Stars{' '}
                          </span>
                          <Rate disabled defaultValue={2} count={2} />
                        </Radio>
                        <Radio value={4}>
                          <span style={{ marginRight: '0.5rem' }}>
                            3 Stars{' '}
                          </span>
                          <Rate disabled defaultValue={3} count={3} />
                        </Radio>
                        <Radio value={5}>
                          <span style={{ marginRight: '0.5rem' }}>
                            4 Stars{' '}
                          </span>
                          <Rate disabled defaultValue={4} count={4} />
                        </Radio>
                        <Radio value={6}>
                          <span style={{ marginRight: '0.5rem' }}>
                            5 Stars{' '}
                          </span>
                          <Rate disabled defaultValue={5} count={5} />
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5} style={{ marginTop: '1.5rem' }}>
                      Are you a property management company or part of a group
                      or chain ?
                    </Typography.Title>
                    <Radio.Group>
                      <Space direction="horizontal">
                        <Radio value={2}>Yes</Radio>
                        <Radio value={3}>No</Radio>
                      </Space>
                    </Radio.Group>
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Name of company, group, or chain
                    </Typography.Title>
                    <Input size="large" />
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
                        navigate('/hotel/location');
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={() => {
                        navigate('/hotel/guest');
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

export default Rating;
