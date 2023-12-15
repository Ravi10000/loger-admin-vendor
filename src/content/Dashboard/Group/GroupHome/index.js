import React from 'react';
import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Typography,
  Input,
  Tabs,
  Table
} from 'antd';
import { Container, MainWrapper } from 'src/components/Global';

import {
  DownloadOutlined,
  PauseOutlined,
  EyeOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { useTheme } from 'styled-components';
import AddedProperties from 'src/components/added-properties';
import { useDocumentTitle } from '@uidotdev/usehooks';
import ActiveProperties from 'src/components/active-properties';
const onChange = key => {
  console.log(key);
};
const column1 = [
  {
    title: 'Id',
    dataIndex: 'Id',
    key: 'Id'
  },
  {
    title: 'Property  ',
    dataIndex: 'Property',
    key: 'Property  '
  },
  {
    title: 'Status on Loger.ma',
    dataIndex: 'StatusonLogerma',
    key: 'StatusonLogerma'
  },

  {
    title: 'Arrivals in Next 48hrs',
    dataIndex: 'ArrivalsinNext48hrs',
    key: 'Arrivals in Next 48hrs'
  },
  {
    title: 'Departure in Next 48hrs',
    dataIndex: 'DepartureinNext48hrs',
    Key: 'Departure in Next 48hrs'
  },
  {
    title: 'Guests Messages',
    dataIndex: 'GuestsMessages',
    Key: 'Guests Messages'
  },
  {
    title: 'Loger.ma Messages',
    dataIndex: 'LogermaMessages',
    Key: 'Loger.ma Messages'
  }
];

const data1 = [
  {
    key: '1',
    Id: '104817',
    Property: 'Blueberry1',
    StatusonLogerma: (
      <>
        <Typography.Text type="danger">Closed/Not bookable</Typography.Text>
      </>
    ),
    ArrivalsinNext48hrs: '0',
    DepartureinNext48hrs: '0',
    GuestsMessages: '0'
  }
];
const column2 = [
  {
    title: 'Id',
    dataIndex: 'Id',
    key: 'Id'
  },
  {
    title: 'Property  ',
    dataIndex: 'Property',
    key: 'Property  '
  },
  {
    title: 'Status on Loger.ma',
    dataIndex: 'StatusonLogerma',
    key: 'StatusonLogerma'
  },

  {
    title: 'Arrivals in Next 48hrs',
    dataIndex: 'ArrivalsinNext48hrs',
    key: 'Arrivals in Next 48hrs'
  },
  {
    title: 'Departure in Next 48hrs',
    dataIndex: 'DepartureinNext48hrs',
    Key: 'Departure in Next 48hrs'
  },
  {
    title: 'Guests Messages',
    dataIndex: 'GuestsMessages',
    Key: 'Guests Messages'
  },
  {
    title: 'Loger.ma Messages',
    dataIndex: 'LogermaMessages',
    Key: 'Loger.ma Messages'
  }
];

const data2 = [
  {
    key: '1',
    Id: '104817',
    Property: 'Blueberry 2',
    StatusonLogerma: (
      <>
        <Typography.Text type="danger">Closed/Not bookable</Typography.Text>
      </>
    ),
    ArrivalsinNext48hrs: '0',
    DepartureinNext48hrs: '0',
    GuestsMessages: '0'
  }
];
const column3 = [
  {
    title: 'Id',
    dataIndex: 'Id',
    key: 'Id'
  },
  {
    title: 'Property  ',
    dataIndex: 'Property',
    key: 'Property  '
  },
  {
    title: 'Status on Loger.ma',
    dataIndex: 'StatusonLogerma',
    key: 'StatusonLogerma'
  },

  {
    title: 'Arrivals in Next 48hrs',
    dataIndex: 'ArrivalsinNext48hrs',
    key: 'Arrivals in Next 48hrs'
  },
  {
    title: 'Departure in Next 48hrs',
    dataIndex: 'DepartureinNext48hrs',
    Key: 'Departure in Next 48hrs'
  },
  {
    title: 'Guests Messages',
    dataIndex: 'GuestsMessages',
    Key: 'Guests Messages'
  },
  {
    title: 'Loger.ma Messages',
    dataIndex: 'LogermaMessages',
    Key: 'Loger.ma Messages'
  }
];

const data3 = [
  {
    key: '1',
    Id: '104817',
    Property: 'Blueberry',
    StatusonLogerma: (
      <>
        <Typography.Text type="danger">Closed/Not bookable</Typography.Text>
      </>
    ),
    ArrivalsinNext48hrs: '0',
    DepartureinNext48hrs: '0',
    GuestsMessages: '0'
  }
];
const items = [
  {
    key: '1',
    label: 'Operations',
    children: (
      <>
        <Row gutter={[32, 32]}>
          <Col xs={24}>
            <Table pagination={false} dataSource={data1} columns={column1} />
          </Col>
        </Row>
      </>
    )
  },
  {
    key: '2',
    label: 'Performance',
    children: (
      <>
        <Table pagination={false} dataSource={data2} columns={column2} />
      </>
    )
  },
  {
    key: '3',
    label: 'Settings',
    children: (
      <>
        {' '}
        <Table pagination={false} dataSource={data3} columns={column3} />
      </>
    )
  }
];

const GroupHome = () => {
  useDocumentTitle('Loger | Home');
  const theme = useTheme();
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Group Homepage
          </Typography.Title>
          <Row>
            <Col xs={24} xl={20}>
              <Space direction="vertical" size={48} style={{ width: '100%' }}>
                <Card>
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
                      <Typography.Title level={5} style={{ marginBottom: 0 }}>
                        Create mobile rates to promote your properties to guests
                        booking on phones.
                      </Typography.Title>
                      <Typography.Text>
                        Each property with a mobile rate can see, on average , a
                        26 % increase in its bookings.
                      </Typography.Text>
                      <Button size="large" type="primary" ghost>
                        Select 1 Eligible Property
                      </Button>
                    </Space>
                  </Space>
                </Card>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Title level={4} style={{ marginBottom: 0 }}>
                    Properties not yet on Loger.ma(!)
                  </Typography.Title>
                  <Typography.Text>
                    Lorem ipsum dolor sit amet consectetur. Sit in donec ut
                    porta urna dolor quis faucibus.
                  </Typography.Text>
                  <AddedProperties />
                </Space>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Title level={4}>
                    Active Properties
                  </Typography.Title>
                  <Input
                    placeholder="Search Reservation"
                    suffix={
                      <SearchOutlined
                        style={{ color: theme.antd.colorTextPlaceholder }}
                      />
                    }
                    style={{ width: 300 }}
                  />
                  {/* <Space
                    direction="vertical"
                    style={{
                      width: '100%'
                    }}
                  >
                    <Tabs
                      style={{ width: '100%' }}
                      defaultActiveKey="1"
                      items={items}
                      onChange={onChange}
                      tabBarExtraContent={{
                        right: (
                          <Space>
                            <Space direction="horizontal">
                              <Button type="text" icon={<DownloadOutlined />}>
                                Downloaded
                              </Button>
                              <Button type="text" icon={<PauseOutlined />}>
                                Customize
                              </Button>
                              <Button type="text" icon={<EyeOutlined />}>
                                Delete
                              </Button>
                            </Space>
                          </Space>
                        )
                      }}
                    />
                  </Space> */}
                  <ActiveProperties />
                  {/* <Table
                    pagination={false}
                    dataSource={data1}
                    columns={column1}
                  /> */}
                </Space>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default GroupHome;
