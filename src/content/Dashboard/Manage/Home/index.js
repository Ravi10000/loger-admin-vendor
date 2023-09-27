import {
  Card,
  Col,
  Divider,
  Row,
  Select,
  Space,
  Tabs,
  Tag,
  Typography
} from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';

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

const Home = () => {
  const theme = useTheme();
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
                    Tirath View, Haridwar - A Four Star Luxury
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
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Home;
