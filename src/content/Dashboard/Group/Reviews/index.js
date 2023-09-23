import React, { useState } from 'react';
import {
 
  Card,
  Col,
  Row,
  Space,
  Typography,
  Select,
  Rate,
  Divider
} from 'antd';
import { Container, MainWrapper } from 'src/components/Global';


import { DatePicker } from 'antd';
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
          <Typography.Title level={2}>Reviews</Typography.Title>
          <Row gutter={[32, 32]}>
            <Space
              direction="horizontal"
              style={{ width: '100%' }}
              align="flex-start"
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Typography.Title level={3} style={{ marginTop: '2.5rem' }}>
                  Filter by Dates{' '}
                </Typography.Title>
                <RangePicker
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
              </Space>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Typography.Title
                  level={3}
                  style={{ marginTop: '2.5rem', marginLeft: '2.5rem' }}
                >
                  Select Property
                </Typography.Title>
                <Space direction="horizontal" style={{ width: '100%' }}>
                  <Select
                    style={{ marginLeft: '4.5rem' }}
                    showSearch
                    placeholder="Select Property"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                  />
                  <button
                    style={{
                      backgroundColor: 'blue',
                      color: 'white',
                      marginLeft: '2.5rem',
                      fontSize: '20px'
                    }}
                  >
                    Show Reviews
                  </button>
                  <Select
                    style={{ marginLeft: '4.5rem' }}
                    showSearch
                    placeholder="Search by Score Date & Comment"
                    optionFilterProp="children"
                    onChange={onChang}
                    onSearch={onSearc}
                  />
                </Space>
              </Space>
            </Space>
            <Col xs={24} xl={22} xxl={8}>
              <Space direction="horizontal">
                <Card>
                  <Space direction="vertical" align="flex-start">
                    <Space direction="horizontal" align="flex-start">
                      <img src={'/assets/images/dashboard-1.png'} alt="" />
                      <Space direction="vertical">
                        <Typography.Title level={5}>
                          Jane Cooper
                        </Typography.Title>
                        <Typography.Text>20 July 2023</Typography.Text>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            style={{ marginLeft: '40rem' }}
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
                          style={{ width: '100%', marginLeft: '43rem' }}
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
                  style={{ width: '100%', marginLeft: '2.5rem' }}
                >
                  <button style={{ padding: '12px 16px' }}>Edit</button>
                  <button style={{ padding: '12px 16px' }}>Delete</button>
                </Space>
              </Space>
            </Col>
            <Col xs={24} xl={22} xxl={8}>
              <Space direction="horizontal">
                <Card>
                  <Space direction="vertical" align="flex-start">
                    <Space direction="horizontal" align="flex-start">
                      <img src={'/assets/images/dashboard-2.png'} alt="" />
                      <Space direction="vertical">
                        <Typography.Title level={5}>
                          Bessie Cooper
                        </Typography.Title>
                        <Typography.Text>30 July 2023</Typography.Text>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            style={{ marginLeft: '40rem' }}
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
                          style={{ width: '100%', marginLeft: '43rem' }}
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
                  style={{ width: '100%', marginLeft: '2.5rem' }}
                >
                  <button style={{ padding: '12px 16px' }}>Edit</button>
                  <button style={{ padding: '12px 16px' }}>Delete</button>
                </Space>
              </Space>
            </Col>
            <Col xs={24} xl={22} xxl={8}>
              <Space direction="horizontal">
                <Card>
                  <Space direction="vertical" align="flex-start">
                    <Space direction="horizontal" align="flex-start">
                      <img src={'/assets/images/dashboard-3.png'} alt="" />
                      <Space direction="vertical">
                        <Typography.Title level={5} >
                          Ralph Edwards
                        </Typography.Title>
                        <Typography.Text>10 August 2023</Typography.Text>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            style={{ marginLeft: '39rem' }}
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
                          style={{ width: '100%', marginLeft: '43rem' }}
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
                  style={{ width: '100%', marginLeft: '2.5rem' }}
                >
                  <button style={{ padding: '12px 16px' }}>Edit</button>
                  <button style={{ padding: '12px 16px' }}>Delete</button>
                </Space>
              </Space>
            </Col>
            <Col xs={24} xl={22} xxl={8}>
              <Space direction="horizontal">
                <Card>
                  <Space direction="vertical" align="flex-start">
                    <Space direction="horizontal" align="flex-start">
                      <img src={'/assets/images/dashboard-4.png'} alt="" />
                      <Space direction="vertical">
                        <Typography.Title level={5}>
                          Guy Hawkins
                        </Typography.Title>
                        <Typography.Text>2 September 2023</Typography.Text>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <span>
                          <Rate
                            style={{ marginLeft: '40rem' }}
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
                          style={{ width: '100%', marginLeft: '43rem' }}
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
                  style={{ width: '100%', marginLeft: '2.5rem' }}
                >
                  <button style={{ padding: '12px 16px' }}>Edit</button>
                  <button style={{ padding: '12px 16px' }}>Delete</button>
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
