import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Radio,
  Row,
  Space,
  Typography
} from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';

const GeneralInfo = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={24} xl={20} xxl={16}>
              <Space size={48} direction="vertical" style={{ width: '100%' }}>
                <Space
                  style={{
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                  direction="vertical"
                >
                  <Typography.Title level={4}>General Info</Typography.Title>
                  <Card>
                    <Space
                      direction="vertical"
                      style={{ width: '100%' }}
                      size="large"
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Property Name
                        </Typography.Title>
                        <Typography.Text>
                          Lorem ipsum dolor sit amet
                        </Typography.Text>
                        <Typography.Link>Change Property Name</Typography.Link>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Property Address
                        </Typography.Title>
                        <Typography.Text>Boulevard Mouahidin</Typography.Text>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Property Location
                        </Typography.Title>
                        <Typography.Text>
                          {'33.9098365266,(On Google Maps and OpenStreetMap)'}
                        </Typography.Text>
                      </Space>
                      <Divider style={{ marginBlock: 0 }} />
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Property Status
                        </Typography.Title>
                        <Typography.Link>Snooze Your Listing</Typography.Link>
                      </Space>
                    </Space>
                  </Card>
                </Space>
                <Space
                  style={{
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                  direction="vertical"
                >
                  <Typography.Title level={4}>
                    Host-type Selection
                  </Typography.Title>
                  <Card>
                    <Space
                      size="large"
                      direction="vertical"
                      style={{ width: '100%' }}
                    >
                      <Typography.Paragraph style={{ marginBottom: 0 }}>
                        Lorem ipsum dolor sit amet consectetur. Nibh hendrerit
                        amet lectus lacinia at eu diam a feugiat. Massa arcu
                        lacus eget turpis maNulla tm sollicitudin sed rhoncus
                        mollis. Malesuada libero erat mattis ultrices quisque
                        condimentum neque. Est et tempu tell molestie sed
                        aliquet amet. Curabitur condiment lectus vitae lacus
                        egestas egestas tellus nulla eu. Amet convallis lobortis
                        odio adipiscing dignissim.
                      </Typography.Paragraph>
                      <Space
                        direction="vertical"
                        size="middle"
                        style={{ width: '100%' }}
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          Which Option Describes You Best?
                        </Typography.Title>
                        <Radio.Group defaultValue="1">
                          <Space direction="vertical" size="middle">
                            <Radio value="1">
                              <Typography.Text strong>
                                Professional Host
                              </Typography.Text>
                              <Typography.Paragraph style={{ marginBottom: 0 }}>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a
                                feugiat. Massa arcu lacus eget turpis massa arcu
                                faucibus sed ligula. Nulla tincidunt etiam
                                sollicitudin sed rhoncus mollis. Malesuada
                                libero erat mattis ultrices quisque condimentum
                                neque.
                              </Typography.Paragraph>
                            </Radio>
                            <Radio value="2">
                              <Typography.Text strong>
                                Private Host/Non-Professional
                              </Typography.Text>
                              <Typography.Paragraph style={{ marginBottom: 0 }}>
                                Lorem ipsum dolor sit amet consectetur. Nibh
                                hendrerit amet lectus lacinia at eu diam a
                                feugiat. Massa arcu lacus eget turpis massa arcu
                                faucibus sed ligula. Nulla tincidunt etiam
                                sollicitudin sed rhoncus mollis. Malesuada
                                libero erat mattis ultrices quisque condimentum
                                neque.
                              </Typography.Paragraph>
                            </Radio>
                          </Space>
                        </Radio.Group>
                      </Space>
                      <Button type="primary" size="large">
                        Update Your Info
                      </Button>
                    </Space>
                  </Card>
                </Space>
                <Space
                  style={{
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                  direction="vertical"
                >
                  <Typography.Title level={4}>
                    Partner Liability Insurance
                  </Typography.Title>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Typography.Text type="success">
                        You are enrolled in the Programme
                      </Typography.Text>
                      <Typography.Paragraph style={{ marginBottom: 0 }}>
                        Lorem ipsum dolor sit amet consectetur. Nibh hendrerit
                        amet lectus lacinia at eu diam a feugiat. Massa arcu
                        lacus eget turpis maNulla tm sollicitudin sed rhoncus
                        mollis. Malesuada libero erat mattis ultrices quisque
                        condimentum neque. Est et tempu tell molestie sed
                        aliquet amet. Curabitur condiment lectus vitae lacus
                        egestas egestas tellus nulla eu. Amet convallis lobortis
                        odio adipiscing dignissim.
                      </Typography.Paragraph>
                      <Checkbox>
                        <Typography.Text type="success">
                          You are enrolled in the Programme
                        </Typography.Text>
                      </Checkbox>
                      <Button type="primary" size="large">
                        Opt Out
                      </Button>
                    </Space>
                  </Card>
                </Space>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default GeneralInfo;
