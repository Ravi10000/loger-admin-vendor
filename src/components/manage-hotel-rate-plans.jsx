import { Table, Button, Space, Typography, Row, Col, Card } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

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

function ManageHotelRatePlans() {
  return (
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

        rowExpandable: record => record.name !== 'Not Expandable'
      }}
      dataSource={data}
    />
  );
}

export default ManageHotelRatePlans;
