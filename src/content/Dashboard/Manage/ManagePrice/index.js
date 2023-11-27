import {
  Button,
  Col,
  Row,
  Space,
  Typography,
  
  Card,
  
  Select,
  Radio,
 
  Collapse,
  Divider,
  Switch
} from 'antd';

import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
const handleChange = value => {
  console.log(`selected ${value}`);
};

const items = [
  {
    key: '1',
    label: 'Standard Rate',
    children: (
      <>
        <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
          <Space
            direction="vertical"
            style={{ marginBottom: '2.5rem', width: '48%' }}
          >
            <Space
              direction="horizontal"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography.Text type="secondary">
                Base occupancy:4 guests{' '}
              </Typography.Text>
              <Typography.Text type="secondary">
                Max occupancy: 4 guests{' '}
              </Typography.Text>
            </Space>
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>
              What’s the Base Occupancy You Want to Use for this Rate?
            </Typography.Text>
            <Typography.Text type="secondary">
              Base occupancy is how many guests you want to include for your
              normal price. The normal price is the baseline for your pricing
              per guests calculations.
            </Typography.Text>
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>Base Occupancy.</Typography.Text>

            <Select
              defaultValue="lucy"
              style={{ width: 300 }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>Set Prices Per Guests</Typography.Text>
            <Typography.Text type="secondary">
              Lorem ipsum dolor sit amet consectetur. Odio ipsum ut fermentum
              ultrices est quisque. fermentum pretium sit lobortis rhoncus
              aliquam. At pellentesque quisque laoreet adipiscing lectus id nunc
              amet. Pharetra sit amet ut dui. tellus aenean sem adipiscing felis
              orci. Scelerisque massa
            </Typography.Text>
          </Space>
          <Radio.Group>
            <Radio value={1}>Recommended</Radio>
            <Radio value={2}>Custom</Radio>
          </Radio.Group>

          <Card>
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                width: '43%',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text strong>Occupancy </Typography.Text>
              <Typography.Text strong>Price</Typography.Text>
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                width: '47%',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">4 Guests </Typography.Text>
              <Typography.Text type="secondary">Normal Price</Typography.Text>
            </Space>

            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">3 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">2 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">1 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
          </Card>
          <Button type="primary" ghost>
            Save Changes
          </Button>
        </Space>
      </>
    )
  }
];
const items1 = [
  {
    key: '1',
    label: 'Non-Refundable Rate',
    children: (
      <>
        <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
          <Space
            direction="vertical"
            style={{ marginBottom: '2.5rem', width: '48%' }}
          >
            <Space
              direction="horizontal"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography.Text type="secondary">
                Base occupancy:4 guests{' '}
              </Typography.Text>
              <Typography.Text type="secondary">
                Max occupancy: 4 guests{' '}
              </Typography.Text>
            </Space>
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>
              What’s the Base Occupancy You Want to Use for this Rate?
            </Typography.Text>
            <Typography.Text type="secondary">
              Base occupancy is how many guests you want to include for your
              normal price. The normal price is the baseline for your pricing
              per guests calculations.
            </Typography.Text>
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>Base Occupancy.</Typography.Text>

            <Select
              defaultValue="lucy"
              style={{ width: 300 }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>Set Prices Per Guests</Typography.Text>
            <Typography.Text type="secondary">
              Lorem ipsum dolor sit amet consectetur. Odio ipsum ut fermentum
              ultrices est quisque. fermentum pretium sit lobortis rhoncus
              aliquam. At pellentesque quisque laoreet adipiscing lectus id nunc
              amet. Pharetra sit amet ut dui. tellus aenean sem adipiscing felis
              orci. Scelerisque massa
            </Typography.Text>
          </Space>
          <Radio.Group>
            <Radio value={1}>Recommended</Radio>
            <Radio value={2}>Custom</Radio>
          </Radio.Group>

          <Card>
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                width: '43%',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text strong>Occupancy </Typography.Text>
              <Typography.Text strong>Price</Typography.Text>
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                width: '47%',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">4 Guests </Typography.Text>
              <Typography.Text type="secondary">Normal Price</Typography.Text>
            </Space>

            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">3 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">2 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">1 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
          </Card>
          <Button type="primary" ghost>
            Save Changes
          </Button>
        </Space>
      </>
    )
  }
];
const items2 = [
  {
    key: '1',
    label: 'Weekly Rate',
    children: (
      <>
        <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
          <Space
            direction="vertical"
            style={{ marginBottom: '2.5rem', width: '48%' }}
          >
            <Space
              direction="horizontal"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography.Text type="secondary">
                Base occupancy:4 guests{' '}
              </Typography.Text>
              <Typography.Text type="secondary">
                Max occupancy: 4 guests{' '}
              </Typography.Text>
            </Space>
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>
              What’s the Base Occupancy You Want to Use for this Rate?
            </Typography.Text>
            <Typography.Text type="secondary">
              Base occupancy is how many guests you want to include for your
              normal price. The normal price is the baseline for your pricing
              per guests calculations.
            </Typography.Text>
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>Base Occupancy.</Typography.Text>

            <Select
              defaultValue="lucy"
              style={{ width: 300 }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Space>
          <Space direction="vertical" style={{ marginBottom: '2.5rem' }}>
            <Typography.Text strong>Set Prices Per Guests</Typography.Text>
            <Typography.Text type="secondary">
              Lorem ipsum dolor sit amet consectetur. Odio ipsum ut fermentum
              ultrices est quisque. fermentum pretium sit lobortis rhoncus
              aliquam. At pellentesque quisque laoreet adipiscing lectus id nunc
              amet. Pharetra sit amet ut dui. tellus aenean sem adipiscing felis
              orci. Scelerisque massa
            </Typography.Text>
          </Space>
          <Radio.Group>
            <Radio value={1}>Recommended</Radio>
            <Radio value={2}>Custom</Radio>
          </Radio.Group>

          <Card>
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                width: '43%',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text strong>Occupancy </Typography.Text>
              <Typography.Text strong>Price</Typography.Text>
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                width: '47%',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">4 Guests </Typography.Text>
              <Typography.Text type="secondary">Normal Price</Typography.Text>
            </Space>

            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">3 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">2 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
            <Divider />
            <Space
              direction="horizontal"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography.Text type="secondary">1 Guests </Typography.Text>
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  Normal Price Reduced By
                </Typography.Text>
                <Select
                  defaultValue="lucy"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true }
                  ]}
                />
              </Space>
              <Switch defaultChecked />
            </Space>
          </Card>
          <Button type="primary" ghost>
            Save Changes
          </Button>
        </Space>
      </>
    )
  }
];

const ManagePrice = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Row>
            <Col span={18}>
               <Space direction='vertical' style={{marginRight:'2rem'}}>
              <Typography.Title level={2}>
                Apartment 2 chambres Lorem ipsum dolor sit amet consectetur
              </Typography.Title>
              <Collapse
                items={items}
                bordered={false}
                expandIconPosition="right"
              />
              <Collapse
                items={items1}
                bordered={false}
                expandIconPosition="right"
              />
              <Collapse
                items={items2}
                bordered={false}
                expandIconPosition="right"
              />
              </Space>
              </Col>
              <Col span={6}>
                <Typography.Title level={2}>Pricing Per Guest</Typography.Title>
              <Card>
                <Typography.Link>
                  {' '}
                  Apartment 2 Chambres Lorem ipsum dolor sit amet consectetur
                </Typography.Link>
                <Divider/>
                <Typography.Link>Best Studio at India</Typography.Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default ManagePrice;
