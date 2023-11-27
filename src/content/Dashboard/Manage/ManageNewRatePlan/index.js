import {
  Button,
  Col,
  Row,
  Space,
  Typography,
  
  List,
  
} from 'antd';

import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
const data = [
  <Space
    direction="horizontal"
    size="large"
    style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
  >
    <Typography.Text strong>Flexible</Typography.Text>
    <Typography.Text>
      Lorem ipsum dolor sit amet consectetur. Facilisis ipsum id d
    </Typography.Text>
    <Button type="primary" ghost>
      Add Rate Plans
    </Button>
  </Space>,

  <Space
    style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
  >
    <Typography.Text strong>Non -Refundable</Typography.Text>

    <Typography.Text style={{ left: '-37px', position: 'relative' }}>
      Lorem ipsum dolor sit amet consectetur. Facilisis ipsum id d
    </Typography.Text>

    <Button type="primary" ghost>
      Add Rate Plans
    </Button>
  </Space>
];
const data1 = [
  <Space
    direction="horizontal"
    size="large"
    style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
  >
    <Typography.Text strong>Weekly</Typography.Text>
    <Typography.Text>
      Lorem ipsum dolor sit amet consectetur. Facilisis ipsum id d
    </Typography.Text>
    <Button type="primary" ghost>
      Add Rate Plans
    </Button>
  </Space>,

  <Space
    style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
  >
    <Typography.Text strong>Monthly</Typography.Text>

    <Typography.Text >
      Lorem ipsum dolor sit amet consectetur. Facilisis ipsum id d
    </Typography.Text>

    <Button type="primary" ghost>
      Add Rate Plans
    </Button>
  </Space>,
  <Space
  style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
>
  <Typography.Text strong>Early Booker</Typography.Text>

  <Typography.Text style={{ left:'-15px', position: 'relative' }}>
    Lorem ipsum dolor sit amet consectetur. Facilisis ipsum id d
  </Typography.Text>

  <Button type="primary" ghost>
    Add Rate Plans
  </Button>
</Space>
];
const ManageNewRatePlan = () => {
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
                <Typography.Title level={2}>
                  Add a New Rate Plan
                </Typography.Title>
                <Space direction="vertical" size="small">
                  <Typography.Title level={5}>
                    Increase Bookings and Reduce Cancellations
                  </Typography.Title>
                  <Typography.Text>
                    These Rate Plans will give You a Solid Foundation for Your
                    Pricing Strategy.
                  </Typography.Text>
                </Space>

                <List
                  size="large"
                  bordered
                  dataSource={data}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
                <Space direction="vertical
                ">
                  <Typography.Text strong>
                    Attract a Wider Range of Guests
                  </Typography.Text>
                  <Typography.Text>
                    Lorem ipsum dolor sit amet consectetur. Consequat nunc
                    sapien turpis ut ornare quis tempusLorem ipsum dolor sit
                    amet consectetur
                  </Typography.Text>
                </Space>
                <List
                  size="large"
                  bordered
                  dataSource={data1}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManageNewRatePlan;
