import {
  Button,
  Col,
  Row,
  Space,
  Typography,
  Card,
  Divider,
  Radio,
  Table
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Container, MainWrapper } from 'src/components/Global';
const columns = [
  {
    title: 'Rate Plan Name',
    dataIndex: 'RatePlanName',
    key: 'Rate Plan Name'
  },
  {
    title: 'Cancellation Policy ',
    dataIndex: 'CancellationPolicy',
    key: 'Cancellation Policy '
  },
  {
    title: 'Prices',
    dataIndex: 'Price',
    key: 'Price'
  },
  {
    title: 'Cancellation Rate',
    dataIndex: 'CancellationRate',
    key: 'Cancellation Rate'
  },
  {
    title: 'Net Revenue',
    dataIndex: 'NetRevenue',
    key: 'NetRevenue'
  }
];
const data = [
  {
    key: 1,
    RatePlanName: (
      <>
        <Space direction="vertical">
          <Typography.Text>Standard Rate</Typography.Text>
          <Typography.Text>ID 35942178</Typography.Text>
        </Space>
      </>
    ),

    CancellationPolicy: 'General',
    Price: 'Managed by Your Calender',
    CancellationRate: '......',
    NetRevenue: '......',
    description: (
      <>
        {' '}
        <Row>
          <Col xs={24}>
            <Card>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Space
                  direction="vertical"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Typography.Text strong>Standard Rate</Typography.Text>
                  <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </Space>
                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBottom: '2rem'
                  }}
                >
                  <Space direction="vertical">
                    <Typography.Text strong>Meal Plan</Typography.Text>
                    <Typography.Text>No Meals</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Minimum Stay</Typography.Text>
                    <Typography.Text>No Minimum Length of Stay</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Bookable</Typography.Text>
                    <Typography.Text>Any Time</Typography.Text>
                  </Space>
                </Space>
              </Space>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                <Button type="primary" ghost>
                  Edit
                </Button>
                <Button danger>Delete</Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </>
    )
  },
  {
    key: 2,
    RatePlanName: (
      <>
        <Space direction="vertical">
          <Typography.Text>Standard Rate</Typography.Text>
          <Typography.Text>ID 35942178</Typography.Text>
        </Space>
      </>
    ),

    CancellationPolicy: 'General',
    Price: 'Managed by Your Calender',
    CancellationRate: '......',
    NetRevenue: '......',
    description: (
      <>
        {' '}
        <Row>
          <Col xs={24}>
            <Card>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Space
                  direction="vertical"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Typography.Text strong>Standard Rate</Typography.Text>
                  <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </Space>
                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBottom: '2rem'
                  }}
                >
                  <Space direction="vertical">
                    <Typography.Text strong>Meal Plan</Typography.Text>
                    <Typography.Text>No Meals</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Minimum Stay</Typography.Text>
                    <Typography.Text>No Minimum Length of Stay</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Bookable</Typography.Text>
                    <Typography.Text>Any Time</Typography.Text>
                  </Space>
                </Space>
              </Space>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                <Button type="primary" ghost>
                  Edit
                </Button>
                <Button danger>Delete</Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </>
    )
  },
  {
    key: 3,
    RatePlanName: (
      <>
        <Space direction="vertical">
          <Typography.Text>Standard Rate</Typography.Text>
          <Typography.Text>ID 35942178</Typography.Text>
        </Space>
      </>
    ),

    CancellationPolicy: 'General',
    Price: 'Managed by Your Calender',
    CancellationRate: '......',
    NetRevenue: '......',
    description: (
      <>
        {' '}
        <Row>
          <Col xs={24}>
            <Card>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Space
                  direction="vertical"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Typography.Text strong>Standard Rate</Typography.Text>
                  <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </Space>
                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBottom: '2rem'
                  }}
                >
                  <Space direction="vertical">
                    <Typography.Text strong>Meal Plan</Typography.Text>
                    <Typography.Text>No Meals</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Minimum Stay</Typography.Text>
                    <Typography.Text>No Minimum Length of Stay</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Bookable</Typography.Text>
                    <Typography.Text>Any Time</Typography.Text>
                  </Space>
                </Space>
              </Space>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                <Button type="primary" ghost>
                  Edit
                </Button>
                <Button danger>Delete</Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
];
const options = [
  {
    label: '30 Days',
    value: '30 Days'
  },
  {
    label: '3 Months',
    value: '3 Months'
  },
  {
    label: '6 Months',
    value: '6 Months'
  },
  {
    label: '12 Months',
    value: '12 Months'
  }
];

const ManageBank = () => {
  const [value3, setValue3] = useState('Apple');
  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };
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
                <Typography.Title level={4}>Rate Plans</Typography.Title>
                <Typography.Text>
                  Create and Review Different Types of Rate Plans for Your
                  Customers. You Can Manage and Pricing in Your Calendar.
                </Typography.Text>
                <Card>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space
                      direction="horizontal"
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Button type="primary" size="large">
                        Add New Rate Plans
                      </Button>
                      <Space direction="vertical">
                        <Typography.Text>
                          Show Cancellation and Net Revenue for Last:{' '}
                        </Typography.Text>
                        <Radio.Group
                          options={options}
                          onChange={onChange3}
                          value={value3}
                          optionType="button"
                        />
                      </Space>
                    </Space>
                    <Divider />

                    <Table
                      columns={columns}
                      pagination={false}
                      expandable={{
                        expandIcon: ({ expanded, onExpand, record }) =>
                          expanded ? (
                            <UpOutlined onClick={e => onExpand(record, e)} />
                          ) : (
                            <DownOutlined onClick={e => onExpand(record, e)} />
                          ),
                        expandedRowRender: record => (
                          <p
                            style={{
                              margin: 0
                            }}
                          >
                            {record.description}
                          </p>
                        ),

                        rowExpandable: record =>
                          record.name !== 'Not Expandable'
                      }}
                      dataSource={data}
                    />
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

export default ManageBank;
