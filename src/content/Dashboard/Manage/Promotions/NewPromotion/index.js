import { ArrowLeftOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Col, Row, Space, Tag, Typography, Skeleton } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import api from 'src/api';
import { Container, MainWrapper } from 'src/components/Global';

const media = {
  promoMarketing: '/assets/svg/promotions-marketing.svg',
  promoPercentage: '/assets/svg/promotions-percentage.svg',
  promoTargeting: '/assets/svg/promotions-targeting.svg'
};

const NewPromotion = () => {
  const { data: promotions = [], isFetching } = useQuery({
    queryKey: ['promotions', 'added'],
    queryFn: async () => {
      const res = await api.get(`/promotions`);
      return res.data.promotions;
    }
  });

  console.log(promotions);

  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={24} xl={20}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Link
                    to="/dashboard/manage/promotions"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    <ArrowLeftOutlined />
                    <span style={{ marginLeft: '0.5rem' }}>Promotions</span>
                  </Link>
                  <Typography.Title level={2}>
                    Choose a New Promotions
                  </Typography.Title>
                </Space>
                {isFetching ? (
                  <>
                    <Skeleton
                      avatar
                      paragraph={{
                        rows: 4
                      }}
                    />
                    <Skeleton
                      avatar
                      paragraph={{
                        rows: 4
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4} style={{ marginBottom: 0 }}>
                        Campaign Deals
                      </Typography.Title>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. Praesent cras
                        sem at ac sit gravida.
                      </Typography.Text>
                      <Card>
                        <Row gutter={[12, 12]} align="middle">
                          <Col xs={4} xxl={3}>
                            <img src={media.promoPercentage} alt="" />
                          </Col>
                          <Col xs={20} xxl={6}>
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Title
                                level={5}
                                style={{ marginBottom: 0 }}
                              >
                                Gateway Deal
                              </Typography.Title>
                              <Typography.Text>
                                Recommended 20% Discount or More
                              </Typography.Text>
                              <Space>
                                <Tag>Badge</Tag>
                                <Tag>Marketing Exposure</Tag>
                              </Space>
                            </Space>
                          </Col>
                          <Col xs={24} xxl={5}>
                            <Space
                              size="middle"
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Bookable Period
                                </Typography.Text>
                                <Typography.Text>
                                  15 Mar 2023-28 Sept 2023
                                </Typography.Text>
                              </Space>
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Stay Dates
                                </Typography.Text>
                                <Typography.Text>
                                  4 Apr 2023-28 Sept 2023
                                </Typography.Text>
                              </Space>
                            </Space>
                          </Col>
                          <Col xs={24} xxl={6}>
                            <Typography.Text>
                              Target occupancy gaps and benefit from extra
                              marketing exposure
                            </Typography.Text>
                          </Col>
                          <Col xs={24} xxl={4}>
                            <Button type="primary" ghost>
                              Add Promotions
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4} style={{ marginBottom: 0 }}>
                        Deep Deals
                      </Typography.Title>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. Praesent cras
                        sem at ac sit gravida.
                      </Typography.Text>
                      <Card>
                        <Row gutter={[12, 12]} align="middle">
                          <Col xs={4} xxl={3}>
                            <img src={media.promoMarketing} alt="" />
                          </Col>
                          <Col xs={20} xxl={6}>
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Title
                                level={5}
                                style={{ marginBottom: 0 }}
                              >
                                Gateway Deal
                              </Typography.Title>
                              <Typography.Text>
                                Recommended 20% Discount or More
                              </Typography.Text>
                              <Space>
                                <Tag>Badge</Tag>
                                <Tag>Marketing Exposure</Tag>
                              </Space>
                            </Space>
                          </Col>
                          <Col xs={24} xxl={5}>
                            <Space
                              size="middle"
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Bookable Period
                                </Typography.Text>
                                <Typography.Text>
                                  15 Mar 2023-28 Sept 2023
                                </Typography.Text>
                              </Space>
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Stay Dates
                                </Typography.Text>
                                <Typography.Text>
                                  4 Apr 2023-28 Sept 2023
                                </Typography.Text>
                              </Space>
                            </Space>
                          </Col>
                          <Col xs={24} xxl={6}>
                            <Typography.Text>
                              Target occupancy gaps and benefit from extra
                              marketing exposure
                            </Typography.Text>
                          </Col>
                          <Col xs={24} xxl={4}>
                            <Button type="primary" ghost>
                              Add Promotions
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4} style={{ marginBottom: 0 }}>
                        Targeting
                      </Typography.Title>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. Praesent cras
                        sem at ac sit gravida.
                      </Typography.Text>
                      <Card>
                        <Row gutter={[12, 12]} align="middle">
                          <Col xs={4} xxl={3}>
                            <img src={media.promoTargeting} alt="" />
                          </Col>
                          <Col xs={20} xxl={6}>
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Title
                                level={5}
                                style={{ marginBottom: 0 }}
                              >
                                Gateway Deal
                              </Typography.Title>
                              <Typography.Text>
                                Recommended 20% Discount or More
                              </Typography.Text>
                              <Space>
                                <Tag>Badge</Tag>
                                <Tag>Marketing Exposure</Tag>
                              </Space>
                            </Space>
                          </Col>
                          <Col xs={24} xxl={5}>
                            <Space
                              size="middle"
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Bookable Period
                                </Typography.Text>
                                <Typography.Text>
                                  15 Mar 2023-28 Sept 2023
                                </Typography.Text>
                              </Space>
                              <Space direction="vertical">
                                <Typography.Text strong>
                                  Stay Dates
                                </Typography.Text>
                                <Typography.Text>
                                  4 Apr 2023-28 Sept 2023
                                </Typography.Text>
                              </Space>
                            </Space>
                          </Col>
                          <Col xs={24} xxl={6}>
                            <Typography.Text>
                              Target occupancy gaps and benefit from extra
                              marketing exposure
                            </Typography.Text>
                          </Col>
                          <Col xs={24} xxl={4}>
                            <Button type="primary" ghost>
                              Add Promotions
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Space>
                  </>
                )}
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default NewPromotion;
