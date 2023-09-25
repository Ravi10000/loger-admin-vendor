import { DownOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Divider,
  Dropdown
} from 'antd';
import React from 'react';

import { Container, MainWrapper } from 'src/components/Global';

const media = {
  checkIcon: '/assets/svg/check.svg',
  roomImg: '/assets/images/hotel-img-3.png'
};

const Hotelinfo = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row gutter={[32, 32]}>
            <Col xs={24} xl={20} xxl={16}>
              <Space
                direction="vertical"
                style={{ width: '100%' }}
                size="large"
              >
                <Card>
                  <Space
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <Space size="middle">
                      <img src={media.checkIcon} alt="" />
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Text>Step 1</Typography.Text>
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Property details
                        </Typography.Title>
                        <Typography.Paragraph style={{ marginBottom: 0 }}>
                          The basics .Add your property name , address ,
                          facilities , and room more.
                        </Typography.Paragraph>
                      </Space>
                    </Space>
                    <Typography.Link underline>Edit</Typography.Link>
                  </Space>
                </Card>
                <Card>
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    size="large"
                  >
                    <Space
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <Space size="middle">
                        <img src={media.checkIcon} alt="" />
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Text>Step 1</Typography.Text>
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Property details
                          </Typography.Title>
                          <Typography.Paragraph style={{ marginBottom: 0 }}>
                            The basics .Add your property name , address ,
                            facilities , and room more.
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Typography.Link underline>Edit</Typography.Link>
                    </Space>
                    <Space
                      style={{ width: '100%', justifyContent: 'space-between' }}
                      size="large"
                    >
                      <Space direction="horizontal" size="large">
                        <img src={media.roomImg} alt="" />
                        <Space direction="vertical" size="large">
                          <Typography.Title
                            level={5}
                            style={{ marginBottom: 0 }}
                          >
                            Double Room
                          </Typography.Title>
                          <Space direction="horizontal">
                            <Space direction="vertical">
                              <Typography.Text>
                                <b>Guest</b>
                              </Typography.Text>
                              <Typography.Text>2</Typography.Text>
                            </Space>
                            <Divider type="vertical" />
                            <Space direction="vertical">
                              <Typography.Text>
                                <b>Beds</b>
                              </Typography.Text>
                              <Typography.Text>2</Typography.Text>
                            </Space>
                            <Divider type="vertical" />
                            <Space direction="vertical">
                              <Typography.Text>
                                <b>Bathrooms</b>
                              </Typography.Text>
                              <Typography.Text>Private</Typography.Text>
                            </Space>
                            <Divider type="vertical" />
                            <Space direction="vertical">
                              <Typography.Text>
                                <b>Price</b>
                              </Typography.Text>
                              <Typography.Text>2000</Typography.Text>
                            </Space>
                            <Divider type="vertical" />
                            <Space direction="vertical">
                              <Typography.Text>
                                <b>Room of this type</b>
                              </Typography.Text>
                              <Typography.Text>1</Typography.Text>
                            </Space>
                          </Space>
                        </Space>
                      </Space>
                      <Space size="large">
                        <Button type="text">Delete</Button>
                        <Dropdown
                          menu={{
                            items: [
                              {
                                key: '1',
                                label: (
                                  <Typography.Text>1st item</Typography.Text>
                                )
                              }
                            ]
                          }}
                          trigger={['click']}
                        >
                          <Button type="primary" ghost>
                            Edit
                            <DownOutlined />
                          </Button>
                        </Dropdown>
                      </Space>
                    </Space>
                    <Divider style={{ marginBlock: 0 }} />
                    <Space style={{ width: '100%', justifyContent: 'end' }}>
                      <Button type="primary" ghost>
                        Add Another Room
                      </Button>
                    </Space>
                  </Space>
                </Card>
                <Card>
                  <Space
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Text>Step 3</Typography.Text>
                      <Typography.Title level={5} style={{ marginBottom: 0 }}>
                        Photos
                      </Typography.Title>
                      <Typography.Paragraph style={{ marginBottom: 0 }}>
                        Share some photos of your property so guests know what
                        to expect.
                      </Typography.Paragraph>
                    </Space>
                    <Button type="primary">Add Photos</Button>
                  </Space>
                </Card>
                <Card>
                  <Space
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Text>Step 4</Typography.Text>
                      <Typography.Title level={5} style={{ marginBottom: 0 }}>
                        Final Steps
                      </Typography.Title>
                      <Typography.Paragraph style={{ marginBottom: 0 }}>
                        Set Up Payments and Invoicing Before You Open for
                        Bookings.
                      </Typography.Paragraph>
                    </Space>
                    <Button type="primary" ghost>
                      Complete Registration
                    </Button>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Hotelinfo;
