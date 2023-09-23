import React from 'react';
import { Button, Card, Col, Row, Space, Typography, Input } from 'antd';
import { Container, MainWrapper } from 'src/components/Global';


import { Table} from 'antd';
import { Tabs } from 'antd';


const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Operations',
   
  },
  {
    key: '2',
    label: 'Performance',
    
  },
  {
    key: '3',
    label: 'Settings',
    
  }
];

const { Search } = Input;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Location',
    dataIndex: 'Location',
    key: 'Location'
  },
  {
    title: 'Status on Loger.ma',
    dataIndex: 'RegistrationProgress',
    key: 'RegistrationProgress'
  },

  {
    title: 'Action',
    dataIndex: 'Action',
    key: 'Action'
  },
  {
    title: 'Delete',
    Key: 'Delete',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'Unnamed Property',
    Location: 'India',
    RegistrationProgress: 'New York No. 1 Lake Park',
    Action: <a>Continue Registration</a>
  },
  {
    key: '2',
    name: 'Blueberry',
    Location: 'India',
    RegistrationProgress: 'London No. 1 Lake Park',
    Action: <a>Continue Registration</a>
  }
];
const column = [
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
    Key: 'Departure in Next 48hrs',
   
  },
  {
    title: 'Guests Messages',
    dataIndex: 'GuestsMessages',
    Key: 'Guests Messages',
   
  },
  {
    title: 'Loger.ma Messages',
    dataIndex: 'LogermaMessages',
    Key: 'Loger.ma Messages',
   
  }
];

const dat = [
  {
    key: '1',
    Id: '104817',
    Property: 'Blueberry',
    StatusonLogerma: 'Closed/Not bookable',
    ArrivalsinNext48hrs : '0',
    DepartureinNext48hrs:'0',
    GuestsMessages:'0',
   
  },
  
];


const GroupHome = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2}>Group Homepage</Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} xl={20} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Title level={5}>
                      Create mobile rates to promote your properties to guests
                      booking on phones.
                    </Typography.Title>
                    <Typography.Text>
                      Each property with a mobile rate can see, on average , a
                      26 % increase in its bookings.
                    </Typography.Text>
                    <Button
                      size="large"
                      style={{
                        color: 'blue',
                        borderRadius: 'blue',
                        marginTop: '2rem'
                      }}
                    >
                      Select 1 Eligible Property
                    </Button>
                  </Space>
                </Space>
              </Card>
              <Typography.Title style={{ marginTop: '4rem' }}>
                Properties not yet on Loger.ma(!)
              </Typography.Title>
              <Typography.Text>
                Lorem ipsum dolor sit amet consectetur. Sit in donec ut porta
                urna dolor quis faucibus.
              </Typography.Text>
              <Table columns={columns} dataSource={data} />
              <Typography.Title>Active Properties</Typography.Title>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                style={{ width: '50%' }}
              />
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              <Table columns={column} dataSource={dat} />
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default GroupHome;
