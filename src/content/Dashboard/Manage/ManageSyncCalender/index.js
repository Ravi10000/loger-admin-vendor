import {
  Button,
  Col,
  Row,
  Space,
  Typography,
 
  Table,
 
  Tag
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import Card from 'antd/es/card/Card';

const columns = [
  {
    title: 'Calendar Name',
    dataIndex: 'CalendarName'
  },
  {
    title: 'Last Exported',
    dataIndex: 'LastExported'
  },
  {
    title: 'Status',
    dataIndex: 'Status'
  },
  {
    title: 'Delete',
    dataIndex: 'Delete'
  }
];
const data = [
  {
    key: '1',
    CalendarName: 'Abritel.fr',
    LastExported: '4 Minutes',
    Status: (
      <>
        <Tag color="darkgreen">OK</Tag>
      </>
    ),
    Delete: (
      <>
        <Button type="primary" ghost danger icon={<DeleteOutlined />}>
          Delete
        </Button>
      </>
    )
  },
  {
    key: '2',
    CalendarName: 'Abritel.fr',
    LastExported: '4 Minutes',
    Status: (
      <>
        <Tag color="darkgreen">OK</Tag>
      </>
    ),
    Delete: (
      <>
        <Button type="primary" ghost danger icon={<DeleteOutlined />}>
          Delete
        </Button>
      </>
    )
  },
  {
    key: '3',
    CalendarName: 'Abritel.fr',
    LastExported: '4 Minutes',
    Status: (
      <>
        <Tag color="darkgreen">OK</Tag>
      </>
    ),
    Delete: (
      <>
        <Button type="primary" ghost danger icon={<DeleteOutlined />}>
          Delete
        </Button>
      </>
    )
  }
];
const ManageSyncCalender = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col span={16}>
              <Space
                direction="vertical"
                style={{ marginBottom: '2.5rem', marginRight: '2.5rem' }}
              >
                <Typography.Title level={2}>
                  Synchronise Your Calendar Across Channels
                </Typography.Title>
                <Space style={{ marginBottom: '2.5rem' }}>
                  <Typography.Text>
                    Lorem ipsum dolor sit amet consectetur. Eget vitae nunc
                    tempor sed cras tincidunt. Sit congue in neque massa
                    elementum massa eu aliquam. Eu purus eget integer sed ut
                    laoreet congue id sollicitudin Aliquam enim sed morbi
                    feugiat
                  </Typography.Text>
                </Space>

                <Space
                  direction="horizontal"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <Space direction="horizontal">
                    <Typography.Title level={5}>
                      Appartments 2 Chambers
                    </Typography.Title>
                  </Space>
                  <Space direction="horizontal">
                    <Button type="primary" size="large">
                      Add Calendar Connection
                    </Button>
                    <Button type="primary" size="large" ghost>
                      Import Now
                    </Button>
                  </Space>
                </Space>
                <Table
                  style={{ marginBottom: '2.5rem' }}
                  pagination={false}
                  columns={columns}
                  dataSource={data}
                  size="middle"
                />

                <Space
                  direction="horizontal"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Space direction="horizontal">
                    <Typography.Title level={5}>
                      Best Studio at Casablance Marina
                    </Typography.Title>
                  </Space>
                  <Space direction="horizontal">
                    <Button type="primary" size="large">
                      Add Calendar Connection
                    </Button>
                    <Button type="primary" size="large" ghost>
                      Import Now
                    </Button>
                  </Space>
                </Space>
                <Table
                  pagination={false}
                  columns={columns}
                  dataSource={data}
                  size="middle"
                />
              </Space>
            </Col>
            <Col span={8}>
              <Space direction="vertical">
                <Typography.Title level={2}>
                  {' '}
                  Get to Know the Status
                </Typography.Title>
                <Card>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ marginBottom: '1rem' }}
                  >
                    <Space direction="vertical">
                      <Typography.Text strong>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                  </Space>
                </Card>
                <Typography.Title level={2}>Explore Options</Typography.Title>
                <Card>
                  <Space direction="vertical">
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. pellentesque
                      imperdiet euismod Lorem ipsum dolor sit ametdolor sit amet
                      consectetur. pellentesque imperdiet euismod Lorem ipsum
                      dolor sit amet Lorem ipsum dolor sit amet consectetur.
                      pellentesque imperdiet euismod Lorem ipsum dolor sit
                      ametdolor sit amet consectetur.{' '}
                    </Typography.Text>
                    <Button style={{ marginTop: '2rem' }} type="primary" ghost>
                      Change
                    </Button>
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

export default ManageSyncCalender;
