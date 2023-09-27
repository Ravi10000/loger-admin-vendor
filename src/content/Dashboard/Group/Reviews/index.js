import React, { useState } from 'react';
import {
  Card,
  Col,
  Row,
  Space,
  Typography,
  Select,
  Rate,
  Divider,
  Button,
  Form
} from 'antd';
import {
  DeleteOutlined,
  EditOutlined ,
  SearchOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { Container, MainWrapper } from 'src/components/Global';

import { DatePicker } from 'antd';
import FormItem from 'antd/es/form/FormItem';
const { RangePicker } = DatePicker;

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const onChange = value => {
  console.log(`selected ${value}`);
};
const onSearch = value => {
  console.log('search:', value);
};
const onChang = value => {
  console.log(`selected ${value}`);
};
const onSearc = value => {
  console.log('search:', value);
};
const Reviews = () => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const disabledDate = current => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
    return !!tooEarly || !!tooLate;
  };
  const onOpenChange = open => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const [valu, setValu] = useState(3);
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title style={{ marginBottom: '2.5rem' }} level={2}>
            Reviews
          </Typography.Title>

          <Space
            direction="horizontal"
            size="large"
            style={{ width: '100%', alignItems: 'center' }}
          >
            <Form.Item
              label={
                <>
                  {' '}
                  <Typography.Title level={5}>Filter by Dates</Typography.Title>
                </>
              }
              labelCol={{ span: 24 }}
            >
              <RangePicker
                size="large"
                value={dates || value}
                disabledDate={disabledDate}
                onCalendarChange={val => {
                  setDates(val);
                }}
                onChange={val => {
                  setValue(val);
                }}
                onOpenChange={onOpenChange}
                changeOnBlur
              />
            </Form.Item>

            <Form.Item
              label={
                <>
                  <Typography.Title level={5}>Select Property</Typography.Title>
                </>
              }
              labelCol={{ span: 24 }}
            >
              <Select
                size="large"
                showSearch
                placeholder="Select Property"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
              />
            </Form.Item>

            <Button type="primary">Show Reviews</Button>

            <Select
              style={{ marginLeft: '20rem' }}
              showSearch
              placeholder="Search by Score Date & Comment"
              optionFilterProp="children"
              onChange={onChang}
              onSearch={onSearc}
            />
          </Space>
          <Row gutter={[32, 32]}>
            <Col xs={22}>
              <Space
                direction="horizontal"
                size="large"
                style={{ width: '100%', marginTop: '2.5rem' }}
              >
                <Card size="large">
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    align="flex-start"
                  >
                    <Space
                      direction="horizontal"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Space direction="horizontal">
                        <img src={'/assets/images/dashboard-1.png'} alt="" />

                        <Space direction="vertical">
                          <Typography.Title level={5}>
                            Jane Cooper
                          </Typography.Title>
                          <Typography.Text>20 July 2023</Typography.Text>
                        </Space>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            tooltips={desc}
                            onChange={setValu}
                            value={valu}
                          />
                          {value ? (
                            <span className="ant-rate-text">
                              {desc[value - 1]}
                            </span>
                          ) : (
                            ''
                          )}
                        </span>

                        <Space
                          direction="horizontal"
                          style={{ width: '100%', marginLeft: '' }}
                        >
                          <Typography.Text>3</Typography.Text>
                          <Divider type="vertical" />

                          <Typography.Title level={5}>5</Typography.Title>
                        </Space>
                      </Space>
                    </Space>
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. Quam eu tortor
                      tellus blandit purus pellentesque. Non facilisis in lacus
                      posuere sit in imperdiet euismod maecenas. At nibh velit
                      suspendie pharetra aliquet risus duis congue. Vulputate
                      vel lectus neque quam vel. Aliquam mauris in sem ac
                      ornare. Urna consectetur massa ac est quam d
                    </Typography.Text>
                  </Space>
                </Card>
                <Space
                  direction="vertical"
                  style={{ width: '100%', marginLeft: '1.8rem' }}
                >
                  <Button icon={<EditOutlined />}>Edit</Button>
                  <Button icon={<DeleteOutlined />}danger>Delete</Button>
                </Space>
              </Space>
            </Col>
            <Col xs={22}>
              <Space
                direction="horizontal"
                size="large"
                style={{ width: '100%', marginTop: '2.5rem' }}
              >
                <Card size="large">
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    align="flex-start"
                  >
                    <Space
                      direction="horizontal"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Space direction="horizontal">
                        <img src={'/assets/images/dashboard-2.png'} alt="" />

                        <Space direction="vertical">
                          <Typography.Title level={5}>
                            Bessie Cooper
                          </Typography.Title>
                          <Typography.Text>30 July 2023</Typography.Text>
                        </Space>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            tooltips={desc}
                            onChange={setValu}
                            value={valu}
                          />
                          {value ? (
                            <span className="ant-rate-text">
                              {desc[value - 1]}
                            </span>
                          ) : (
                            ''
                          )}
                        </span>

                        <Space
                          direction="horizontal"
                          style={{ width: '100%', marginLeft: '' }}
                        >
                          <Typography.Text>3</Typography.Text>
                          <Divider type="vertical" />

                          <Typography.Title level={5}>5</Typography.Title>
                        </Space>
                      </Space>
                    </Space>
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. Quam eu tortor
                      tellus blandit purus pellentesque. Non facilisis in lacus
                      posuere sit in imperdiet euismod maecenas. At nibh velit
                      suspendie pharetra aliquet risus duis congue. Vulputate
                      vel lectus neque quam vel. Aliquam mauris in sem ac
                      ornare. Urna consectetur massa ac est quam d
                    </Typography.Text>
                  </Space>
                </Card>
                <Space
                  direction="vertical"
                  style={{ width: '100%', marginLeft: '1.8rem' }}
                >
                  <Button icon={<EditOutlined />}>Edit</Button>
                  <Button icon={<DeleteOutlined />}danger>Delete</Button>
                </Space>
              </Space>
            </Col>
            <Col xs={22}>
              <Space
                direction="horizontal"
                size="large"
                style={{ width: '100%', marginTop: '2.5rem' }}
              >
                <Card size="large">
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    align="flex-start"
                  >
                    <Space
                      direction="horizontal"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Space direction="horizontal">
                        <img src={'/assets/images/dashboard-3.png'} alt="" />

                        <Space direction="vertical">
                          <Typography.Title level={5}>
                            Ralph Edwards
                          </Typography.Title>
                          <Typography.Text>10 August 2023</Typography.Text>
                        </Space>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            tooltips={desc}
                            onChange={setValu}
                            value={valu}
                          />
                          {value ? (
                            <span className="ant-rate-text">
                              {desc[value - 1]}
                            </span>
                          ) : (
                            ''
                          )}
                        </span>

                        <Space
                          direction="horizontal"
                          style={{ width: '100%', marginLeft: '' }}
                        >
                          <Typography.Text>3</Typography.Text>
                          <Divider type="vertical" />

                          <Typography.Title level={5}>5</Typography.Title>
                        </Space>
                      </Space>
                    </Space>
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. Quam eu tortor
                      tellus blandit purus pellentesque. Non facilisis in lacus
                      posuere sit in imperdiet euismod maecenas. At nibh velit
                      suspendie pharetra aliquet risus duis congue. Vulputate
                      vel lectus neque quam vel. Aliquam mauris in sem ac
                      ornare. Urna consectetur massa ac est quam d
                    </Typography.Text>
                  </Space>
                </Card>
                <Space
                  direction="vertical"
                  style={{ width: '100%', marginLeft: '1.8rem' }}
                >
                  <Button icon={<EditOutlined />}>Edit</Button>
                  <Button icon={<DeleteOutlined />}danger>Delete</Button>
                </Space>
              </Space>
            </Col>
            <Col xs={22}>
              <Space
                direction="horizontal"
                size="large"
                style={{ width: '100%', marginTop: '2.5rem' }}
              >
                <Card size="large">
                  <Space
                    direction="vertical"
                    style={{ width: '100%' }}
                    align="flex-start"
                  >
                    <Space
                      direction="horizontal"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Space direction="horizontal">
                        <img src={'/assets/images/dashboard-4.png'} alt="" />

                        <Space direction="vertical">
                          <Typography.Title level={5}>
                            Guy Hawkins
                          </Typography.Title>
                          <Typography.Text>2 September 2023</Typography.Text>
                        </Space>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            tooltips={desc}
                            onChange={setValu}
                            value={valu}
                          />
                          {value ? (
                            <span className="ant-rate-text">
                              {desc[value - 1]}
                            </span>
                          ) : (
                            ''
                          )}
                        </span>

                        <Space
                          direction="horizontal"
                          style={{ width: '100%', marginLeft: '' }}
                        >
                          <Typography.Text>3</Typography.Text>
                          <Divider type="vertical" />

                          <Typography.Title level={5}>5</Typography.Title>
                        </Space>
                      </Space>
                    </Space>
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. Quam eu tortor
                      tellus blandit purus pellentesque. Non facilisis in lacus
                      posuere sit in imperdiet euismod maecenas. At nibh velit
                      suspendie pharetra aliquet risus duis congue. Vulputate
                      vel lectus neque quam vel. Aliquam mauris in sem ac
                      ornare. Urna consectetur massa ac est quam d
                    </Typography.Text>
                  </Space>
                </Card>
                <Space
                  direction="vertical"
                  style={{ width: '100%', marginLeft: '1.8rem' }}
                >
                  <Button icon={<EditOutlined />}>Edit</Button>
                  <Button icon={<DeleteOutlined />}danger>Delete</Button>
                </Space>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Reviews;
