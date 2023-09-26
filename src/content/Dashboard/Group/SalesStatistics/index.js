import React from 'react';
import {
  Col,
  Row,
  Card,
  Space,
  Typography,
  Select,
  Button,
  Table,
  Form,
  Radio
} from 'antd';
import { Container, MainWrapper } from 'src/components/Global';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = value => {
  console.log('onOk: ', value);
};
const onChang = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onO = value => {
  console.log('onOk: ', value);
};

const SalesStatistics = () => {
  const data = [
    {
      time: '2019-03',
      value: 350,
      count: 800
    },
    {
      time: '2019-04',
      value: 900,
      count: 600
    },
    {
      time: '2019-05',
      value: 300,
      count: 400
    },
    {
      time: '2019-06',
      value: 450,
      count: 380
    },
    {
      time: '2019-07',
      value: 470,
      count: 220
    }
  ];
  const config = {
    data: [data, data],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column'
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 2
        }
      }
    ]
  };
  return (
    <>
      <MainWrapper>
        <Container>
          <Space direction="vertical" style={{ marginTop: '2.5rem' }}>
            <Typography.Title level={2}>Sales Statistics</Typography.Title>
            <Typography.Text>
              Lorem ipsum dolor sit amet consectetur. Quam eu tortor tellus
              blandit purus pellentesque. Non facilisis in lacus posuere sit in
              imperdiet euismod maecenas. At nibh velit suspendie pharetra
              aliquet risus duis congue. Vulputate vel lectus neque quam vel.
              Aliquam mauris in sem ac ornare. Urna consectetur massa ac est
              quam d
            </Typography.Text>
            <Space
              direction="horizontal"
              style={{ marginTop: '1rem', alignItems: 'center' }}
            >
              <Form.Item label="From" labelCol={{ span: 24 }}>
                <DatePicker showTime onChange={onChange} onOk={onOk} />
              </Form.Item>
              <Form.Item label="Until" labelCol={{ span: 24 }}>
                <DatePicker showTime onChange={onChang} onOk={onO} />
              </Form.Item>
              <Button type="primary">Show</Button>
            </Space>
            <Space direction="horizontal">
              <Typography.Title level={2}>
                Room Night and Average Daily Rate
              </Typography.Title>
              <Radio.Group
                defaultValue="a"
                buttonStyle="solid"
                style={{ marginLeft: '38rem' }}
              >
                <Radio.Button value="a">Daily</Radio.Button>
                <Radio.Button value="b">Weekly</Radio.Button>
                <Radio.Button value="c">Monthly</Radio.Button>
              </Radio.Group>
            </Space>
            <Typography.Text>Latest Update on 30, Jul, 2023</Typography.Text>
            {/* <DualAxes {...config} /> */}
          </Space>
        </Container>
      </MainWrapper>
    </>
  );
};

export default SalesStatistics;
