import { UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Card,
  Col,
  Divider,
  List,
  Row,
  Select,
  Space,
  Tabs,
  Tag,
  Typography
} from 'antd';
import { Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { findProperty } from 'src/api/properties.req';
const items = [
  {
    key: '1',
    label: 'Arrivals',
    children: (
      <>
        <Row gutter={[16, 16]}>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>Anil Kumar Sogra</Typography.Text>
              <Typography.Text>2564865542</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text>
                24, July, 2023 to 28, July, 2023
              </Typography.Text>
              <Typography.Text>
                Guest Arrival Time: 12:15 to 1:00 pm
              </Typography.Text>
              <Typography.Text>3 Nights 4 Days</Typography.Text>
              <Typography.Text>2 Adults - 1 Child</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>3. 500</Typography.Text>
              <Typography.Text>20, July, 2023</Typography.Text>
              <Typography.Text>Payment Status</Typography.Text>
              <Typography.Text>Online</Typography.Text>
            </Space>
          </Col>
        </Row>
      </>
    )
  },
  {
    key: '2',
    label: 'Departures',
    children: (
      <>
        <Row gutter={[16, 16]}>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>Anil Kumar Sogra</Typography.Text>
              <Typography.Text>2564865542</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text>
                24, July, 2023 to 28, July, 2023
              </Typography.Text>
              <Typography.Text>
                Guest Arrival Time: 12:15 to 1:00 pm
              </Typography.Text>
              <Typography.Text>3 Nights 4 Days</Typography.Text>
              <Typography.Text>2 Adults - 1 Child</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>3. 500</Typography.Text>
              <Typography.Text>20, July, 2023</Typography.Text>
              <Typography.Text>Payment Status</Typography.Text>
              <Typography.Text>Online</Typography.Text>
            </Space>
          </Col>
        </Row>
      </>
    )
  },
  {
    key: '3',
    label: 'Stay-Overs',
    children: (
      <>
        <Row gutter={[16, 16]}>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>Anil Kumar Sogra</Typography.Text>
              <Typography.Text>2564865542</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text>
                24, July, 2023 to 28, July, 2023
              </Typography.Text>
              <Typography.Text>
                Guest Arrival Time: 12:15 to 1:00 pm
              </Typography.Text>
              <Typography.Text>3 Nights 4 Days</Typography.Text>
              <Typography.Text>2 Adults - 1 Child</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>3. 500</Typography.Text>
              <Typography.Text>20, July, 2023</Typography.Text>
              <Typography.Text>Payment Status</Typography.Text>
              <Typography.Text>Online</Typography.Text>
            </Space>
          </Col>
        </Row>
      </>
    )
  },
  {
    key: '4',
    label: 'Guest Requests',
    children: (
      <>
        <Row gutter={[16, 16]}>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>Anil Kumar Sogra</Typography.Text>
              <Typography.Text>2564865542</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text>
                24, July, 2023 to 28, July, 2023
              </Typography.Text>
              <Typography.Text>
                Guest Arrival Time: 12:15 to 1:00 pm
              </Typography.Text>
              <Typography.Text>3 Nights 4 Days</Typography.Text>
              <Typography.Text>2 Adults - 1 Child</Typography.Text>
            </Space>
          </Col>
          <Col xs={8}>
            <Space size="small" direction="vertical">
              <Typography.Text strong>3. 500</Typography.Text>
              <Typography.Text>20, July, 2023</Typography.Text>
              <Typography.Text>Payment Status</Typography.Text>
              <Typography.Text>Online</Typography.Text>
            </Space>
          </Col>
        </Row>
      </>
    )
  }
];

const data = [
  {
    name: 'Pratiksha Sharma'
  },
  {
    name: 'Anil Sogra'
  },
  {
    name: 'Dipanshu Gupta'
  },
  {
    name: 'Anil Sogra'
  }
];

const Home = () => {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const {
    data: property,
    isFetching,
    error
  } = useQuery({
    queryKey: ['property', propertyId, ['propertyName']],
    enabled: propertyId?.length === 24,
    queryFn: async ({ queryKey }) => {
      const res = await findProperty(propertyId, queryKey?.[2]?.join?.(' '));
      console.log({ res });
      return res?.data?.property || null;
    }
  });
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
                >
                  <Typography.Title level={4}>
                    {property?.propertyName}
                  </Typography.Title>
                  <Tag color={theme.antd.colorSuccess}>Open / Bookable</Tag>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Space
                    style={{
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                    align="center"
                  >
                    <Space size="middle" align="center">
                      <Typography.Title level={4} style={{ marginBottom: 0 }}>
                        Reservations
                      </Typography.Title>
                      <Select
                        style={{ width: 120 }}
                        options={[
                          { value: 'jack', label: 'Jack' },
                          { value: 'lucy', label: 'Lucy' },
                          { value: 'Yiminghe', label: 'yiminghe' }
                        ]}
                      />
                    </Space>
                    <Typography.Link>View All Reservation</Typography.Link>
                  </Space>
                  <Card>
                    <Tabs defaultActiveKey="1" items={items} />
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Latest Reservations
                  </Typography.Title>
                  <Card>
                    <Row gutter={[16, 16]}>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text strong>
                            Anil Kumar Sogra
                          </Typography.Text>
                          <Typography.Text>2564865542</Typography.Text>
                        </Space>
                      </Col>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text>
                            24, July, 2023 to 28, July, 2023
                          </Typography.Text>
                          <Typography.Text>
                            Guest Arrival Time: 12:15 to 1:00 pm
                          </Typography.Text>
                          <Typography.Text>3 Nights 4 Days</Typography.Text>
                          <Typography.Text>2 Adults - 1 Child</Typography.Text>
                        </Space>
                      </Col>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text strong>3. 500</Typography.Text>
                          <Typography.Text>20, July, 2023</Typography.Text>
                          <Typography.Text>Payment Status</Typography.Text>
                          <Typography.Text>Online</Typography.Text>
                        </Space>
                      </Col>
                    </Row>
                    <Divider />
                    <Row gutter={[16, 16]}>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text strong>
                            Anil Kumar Sogra
                          </Typography.Text>
                          <Typography.Text>2564865542</Typography.Text>
                        </Space>
                      </Col>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text>
                            24, July, 2023 to 28, July, 2023
                          </Typography.Text>
                          <Typography.Text>
                            Guest Arrival Time: 12:15 to 1:00 pm
                          </Typography.Text>
                          <Typography.Text>3 Nights 4 Days</Typography.Text>
                          <Typography.Text>2 Adults - 1 Child</Typography.Text>
                        </Space>
                      </Col>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text strong>3. 500</Typography.Text>
                          <Typography.Text>20, July, 2023</Typography.Text>
                          <Typography.Text>Payment Status</Typography.Text>
                          <Typography.Text>Online</Typography.Text>
                        </Space>
                      </Col>
                    </Row>
                    <Divider />
                    <Row gutter={[16, 16]}>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text strong>
                            Anil Kumar Sogra
                          </Typography.Text>
                          <Typography.Text>2564865542</Typography.Text>
                        </Space>
                      </Col>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text>
                            24, July, 2023 to 28, July, 2023
                          </Typography.Text>
                          <Typography.Text>
                            Guest Arrival Time: 12:15 to 1:00 pm
                          </Typography.Text>
                          <Typography.Text>3 Nights 4 Days</Typography.Text>
                          <Typography.Text>2 Adults - 1 Child</Typography.Text>
                        </Space>
                      </Col>
                      <Col xs={8}>
                        <Space size="small" direction="vertical">
                          <Typography.Text strong>3. 500</Typography.Text>
                          <Typography.Text>20, July, 2023</Typography.Text>
                          <Typography.Text>Payment Status</Typography.Text>
                          <Typography.Text>Online</Typography.Text>
                        </Space>
                      </Col>
                    </Row>
                  </Card>
                </Space>
                <Row gutter={[32, 32]}>
                  <Col xs={24} xxl={12}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4} style={{ marginBottom: 0 }}>
                        Recent Reviews
                      </Typography.Title>
                      <Card>
                        <Space
                          direction="vertical"
                          style={{
                            width: '100%'
                          }}
                        >
                          <List
                            bordered={false}
                            dataSource={data}
                            renderItem={(item, index) => (
                              <List.Item>
                                <List.Item.Meta
                                  avatar={
                                    <Avatar size={48} icon={<UserOutlined />} />
                                  }
                                  title={
                                    <Typography.Text>
                                      {item.name}
                                    </Typography.Text>
                                  }
                                  description="Lorem ipsum dolor sit amet consectetur. pellentesque imperdiet euismod maecenas."
                                />
                                <Typography.Text>8 Jul</Typography.Text>
                              </List.Item>
                            )}
                          />
                          <Typography.Link>View All Reviews</Typography.Link>
                        </Space>
                      </Card>
                    </Space>
                  </Col>
                  <Col xs={24} xxl={12}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4} style={{ marginBottom: 0 }}>
                        Unanswered Messages
                      </Typography.Title>
                      <Card></Card>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Home;
