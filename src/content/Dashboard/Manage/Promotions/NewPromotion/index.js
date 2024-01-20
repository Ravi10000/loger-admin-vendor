import { ArrowLeftOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Skeleton,
  List
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from 'src/api';
import { Container, MainWrapper } from 'src/components/Global';
dayjs.extend(customParseFormat);

const NewPromotion = () => {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const { data: promotions = [], isFetching } = useQuery({
    queryKey: ['promotions', 'added'],
    queryFn: async () => {
      const res = await api.get(`/promotions`);
      return res.data.promotions;
    }
  });

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
                    to={`/dashboard/manage/promotions?propertyId=${propertyId}`}
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
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={promotions}
                  renderItem={item => (
                    <List.Item key={item.title} style={{ border: 0 }}>
                      <Skeleton loading={isFetching} active avatar>
                        <Card>
                          <Row gutter={[12, 12]} align="middle">
                            <Col xs={4} xxl={2}>
                              <img
                                src={`${process.env.REACT_APP_SERVER_URL}/images/${item.icon}`}
                                alt=""
                              />
                            </Col>
                            <Col xs={20} xxl={7}>
                              <Space
                                direction="vertical"
                                style={{ width: '100%' }}
                              >
                                <Typography.Title
                                  level={5}
                                  style={{ marginBottom: 0 }}
                                >
                                  {item.title}
                                </Typography.Title>
                                <Typography.Text>
                                  Recommended {item.discountPercent}% Discount
                                  or More
                                </Typography.Text>
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
                                    State Date
                                  </Typography.Text>
                                  <Typography.Text>
                                    {dayjs(item.startDate).format(
                                      'DD MMM YYYY'
                                    )}
                                  </Typography.Text>
                                </Space>
                                <Space direction="vertical">
                                  <Typography.Text strong>
                                    End Date
                                  </Typography.Text>
                                  <Typography.Text>
                                    {dayjs(item.endDate).format('DD MMM YYYY')}
                                  </Typography.Text>
                                </Space>
                              </Space>
                            </Col>
                            <Col xs={24} xxl={6}>
                              <Typography.Text>
                                {item.description}
                              </Typography.Text>
                            </Col>
                            <Col xs={24} xxl={4}>
                              <Button type="primary" ghost>
                                Add Promotions
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      </Skeleton>
                    </List.Item>
                  )}
                />
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default NewPromotion;
