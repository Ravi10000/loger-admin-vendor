import {
  Button,
  Col,
  Row,
  Space,
 
  Typography,
  Card,
  Divider
} from 'antd';


import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { Collapse } from 'antd';
const text = `
Lorem ipsum dolor sit amet consectetur. Consectetur at rhoncus id aenean.
 Habitant et vulputate 
et mi tincidunt quis erat. Viverra fermentum egestas pretium eget nunc scelerisque. 
Mauris potenti tincidunt vestibulum cursus orci at.
`;
const items = [
  {
    key: '1',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '2',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '3',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '4',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '5',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '6',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '7',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '8',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '9',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  },
  {
    key: '10',
    label: 'Lorem ipsum dolor sit amet consectetur. Ultrices pharetra ?',
    children: <p>{text}</p>
  }
];
const ManagePerformance = () => {
  const onChange = key => {
    console.log(key);
  };
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col xs={20}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <Typography.Title level={2}>
                  Performance Dashboard
                </Typography.Title>
                <Button type="primary" size="large">
                  Genius and Preferred
                </Button>
                <Typography.Title level={4}>Eligibility</Typography.Title>
                <Typography.Text>
                  Lorem ipsum dolor sit amet consectetur. Pretium gravida massa
                  pretium augue nunc. Euismod metus blandit amet auctor vivamus
                  pharetra. Sollicitudin pellentesque aliquet suspendisse in
                  mauris orci Ornare in habitant urna ut at nulla sagittis .
                  nteger proin. Consequat aliquet eu aliquam cursus fusce urna
                  id ut. Augue mi proin elementum nunc. Ipsum in risus magna
                  vitae justo habitant. Ac neque massa eu tortor feugiat.
                  Porttitor elementumq{' '}
                </Typography.Text>
                <Row>
                  <Col xs={18}>
                    <Space
                      direction="horizontal"
                      style={{
                        width: '100%',
                        marginTop: '2rem',
                        marginBottom: '2rem'
                      }}
                      size="large"
                    >
                      <Card>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Text strong>Genius </Typography.Text>
                          <Divider />
                          <Space
                            direction="horizontal"
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                            }}
                          >
                            <Space direction="vertical">
                              <Typography.Text>Review Score</Typography.Text>
                              <Typography.Text>No of Review</Typography.Text>
                            </Space>
                            <Space direction="vertical">
                              <Typography.Text>10.0</Typography.Text>
                              <Typography.Text>3</Typography.Text>
                            </Space>
                          </Space>
                          <Divider />
                          <Typography.Text style={{ color: 'green' }}>
                            You’re Eligible
                          </Typography.Text>
                          <Typography.Text>
                            Currently, You meet all the eligibility criteria to
                            join the Genius Programme.{' '}
                          </Typography.Text>
                          <Typography.Link>Join Genius</Typography.Link>
                        </Space>
                      </Card>
                      <Card>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Text strong>Preferred</Typography.Text>
                          <Divider />
                          <Space
                            direction="horizontal"
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                            }}
                          >
                            <Space direction="vertical">
                              <Typography.Text>
                                Performance Score
                              </Typography.Text>
                              <Typography.Text>Review Score</Typography.Text>
                            </Space>
                            <Space direction="vertical">
                              <Typography.Text>90.0%</Typography.Text>
                              <Typography.Text>10.0</Typography.Text>
                            </Space>
                          </Space>
                          <Divider />
                          <Typography.Text style={{ color: 'green' }}>
                            You’re Eligible
                          </Typography.Text>
                          <Typography.Text>
                            Currently, You meet all the eligibility criteria to
                            join the Genius Programme.{' '}
                          </Typography.Text>
                          <Typography.Link>Join Preferred</Typography.Link>
                        </Space>
                      </Card>
                    </Space>
                  </Col>
                </Row>
                <Typography.Title level={2}>
                  Frequently Asked Questions
                </Typography.Title>
                <Collapse
                  items={items}
                  defaultActiveKey={['1']}
                  onChange={onChange}
                  expandIconPosition='right'
                />
                ;
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManagePerformance;
