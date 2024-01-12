import { UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Card,
  Col,
  Divider,
  List,
  Row,
  Space,
  Tabs,
  Tag,
  Typography,
  DatePicker
} from 'antd';

import { Container, MainWrapper } from 'src/components/Global';
import { useTheme } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { findProperty } from 'src/api/properties.req';
import d from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useEffect, useState } from 'react';
import api from 'src/api';
import BookingDetails from 'src/components/booking-details';
import Spinner from 'src/components/spinner';
import LatestBookings from 'src/components/latest-bookings';
import RecentReviews from 'src/components/recent-reviews';
d.extend(customParseFormat);

const items = [
  {
    key: 'arrivals',
    label: 'Arrivals'
  },
  {
    key: 'departures',
    label: 'Departures'
  },
  {
    key: 'stay-overs',
    label: 'Stay-Overs'
  }
];

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(d());

  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const [selectedTab, setSelectedTab] = useState('arrivals');
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

  const { data: bookings } = useQuery({
    queryKey: [
      'bookings',
      propertyId,
      selectedDate,
      selectedTab,
      [
        'userId',
        'checkInDate',
        'checkOutDate',
        'guestList',
        'specialRequests',
        'arrivalTime',
        'transactionId',
        'pkgDetails'
      ]
    ],
    enabled: !!propertyId && !!selectedDate,
    queryFn: async ({ queryKey }) => {
      const res = await api.get(
        `/booking/find/${propertyId}?date=${selectedDate.format(
          'YYYY-MM-DD'
        )}&select=${queryKey?.[4]?.join?.(
          ' '
        )}&queryType=${selectedTab}&status=confirmed`
      );
      console.log({ res });
      return res?.data?.bookings || [];
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
                      <DatePicker
                        value={selectedDate}
                        onChange={setSelectedDate}
                      />
                    </Space>
                    <Typography.Link>View All Reservation</Typography.Link>
                  </Space>
                  <Card>
                    <Tabs
                      activeKey={selectedTab}
                      onChange={setSelectedTab}
                      items={items}
                    />
                    <div style={{ minHeight: '100px' }}>
                      {error ? (
                        <p>Something went wrong</p>
                      ) : isFetching ? (
                        <Spinner />
                      ) : !bookings?.length ? (
                        <p>
                          No {selectedTab} found for {}
                        </p>
                      ) : (
                        bookings?.map?.(booking => (
                          <BookingDetails key={booking._id} {...{ booking }} />
                        ))
                      )}
                    </div>
                  </Card>
                </Space>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Latest Reservations
                  </Typography.Title>
                  <LatestBookings />
                  {/* <Card>
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
                  </Card> */}
                </Space>
                <Row gutter={[32, 32]}>
                  <Col xs={24} xxl={12}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={4} style={{ marginBottom: 0 }}>
                        Recent Reviews
                      </Typography.Title>
                      <RecentReviews propertyId={propertyId} />
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
