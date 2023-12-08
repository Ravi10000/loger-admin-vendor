import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Space,
  Typography,
  Radio,
  Form
} from 'antd';
import { Rate } from 'antd';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';
import { useHotel, useProperty, usePropertyId } from 'src/hooks/property-info';
import { useMutation } from '@tanstack/react-query';
import { updateHotel, updateProperty } from 'src/api/property.req';
import Spinner from 'src/components/spinner';
const Rating = () => {
  const propertyId = usePropertyId();
  const navigate = useNavigate();
  const [isChain, setIsChain] = useState(null);
  console.log({ isChain });
  const { property, isFetching } = useProperty(['propertyName']);
  const { hotel, isFetching: isFetchingApartment } = useHotel(
    ['star', 'chainName'],
    hotel => {
      if (hotel?.chainName) setIsChain(true);
    }
  );
  const { mutate, status } = useMutation({
    mutationFn: async data => {
      console.log({ data });
      await updateProperty({
        propertyId,
        propertyName: data.propertyName
      });
      await updateHotel({
        propertyId,
        star: data.star,
        ...(data?.chainName && { chainName: data?.chainName })
      });
      navigate(`/hotel/${propertyId}/guest`);
    },
    onError: console.log
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Tell Us About Your Hotel
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {isFetching || isFetchingApartment ? (
                  <Spinner />
                ) : (
                  <Form
                    onFinish={mutate}
                    initialValues={{
                      propertyName: property?.propertyName,
                      star: hotel?.star,
                      ...(hotel?.chainName && { chainName: hotel?.chainName })
                    }}
                  >
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          What's the name of your hotel?
                        </Typography.Title>
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Paragraph
                            style={{ marginBottom: '0rem' }}
                          >
                            Property Name
                          </Typography.Paragraph>
                          <Form.Item
                            name="propertyName"
                            rules={[
                              {
                                required: true,
                                message: 'Proterty name required'
                              }
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="Enter Property Name"
                            />
                          </Form.Item>
                          <Typography.Paragraph>
                            Guests will see this name when searching for a place
                            to stay.
                          </Typography.Paragraph>
                        </Space>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          What is the star rating of your hotel?
                        </Typography.Title>
                        <Form.Item
                          name="star"
                          rules={[
                            { required: true, message: 'Select hotel star' }
                          ]}
                        >
                          <Radio.Group>
                            <Space direction="vertical">
                              <Radio value={0}>N/A</Radio>
                              <Radio value={1}>
                                <span style={{ marginRight: '0.5rem' }}>
                                  1 Star{' '}
                                </span>
                                <Rate disabled defaultValue={1} count={1} />
                              </Radio>
                              <Radio value={2}>
                                <span style={{ marginRight: '0.5rem' }}>
                                  2 Stars{' '}
                                </span>
                                <Rate disabled defaultValue={2} count={2} />
                              </Radio>
                              <Radio value={3}>
                                <span style={{ marginRight: '0.5rem' }}>
                                  3 Stars{' '}
                                </span>
                                <Rate disabled defaultValue={3} count={3} />
                              </Radio>
                              <Radio value={4}>
                                <span style={{ marginRight: '0.5rem' }}>
                                  4 Stars{' '}
                                </span>
                                <Rate disabled defaultValue={4} count={4} />
                              </Radio>
                              <Radio value={5}>
                                <span style={{ marginRight: '0.5rem' }}>
                                  5 Stars{' '}
                                </span>
                                <Rate disabled defaultValue={5} count={5} />
                              </Radio>
                            </Space>
                          </Radio.Group>
                        </Form.Item>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title
                          level={5}
                          style={{ marginTop: '1.5rem' }}
                        >
                          Are you a property management company or part of a
                          group or chain ?
                        </Typography.Title>
                        <Form.Item
                          initialValue={isChain}
                          // value={isChain}
                          onChange={e => setIsChain(JSON.parse(e.target.value))}
                          name="isGroupChain"
                          rules={[
                            { required: true, message: 'Please select one' }
                          ]}
                        >
                          <Radio.Group>
                            <Space direction="horizontal">
                              <Radio value={true}>Yes</Radio>
                              <Radio value={false}>No</Radio>
                            </Space>
                          </Radio.Group>
                        </Form.Item>
                      </Space>
                      {isChain && (
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Title level={5}>
                            Name of company, group, or chain
                          </Typography.Title>
                          <Form.Item
                            name="chainName"
                            rules={[
                              {
                                required: !!isChain,
                                message: 'Please enter chain name'
                              }
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="Enter Chain Name"
                            />
                          </Form.Item>
                        </Space>
                      )}
                      <CardBottom direction="horizontal">
                        <Button
                          size="large"
                          type="primary"
                          ghost
                          icon={<ArrowLeftOutlined />}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center'
                          }}
                          onClick={() => {
                            navigate('/hotel/location');
                          }}
                        >
                          Back
                        </Button>
                        <Button
                          size="large"
                          type="primary"
                          block
                          htmlType="submit"
                          disabled={
                            isFetching ||
                            isFetchingApartment ||
                            status === 'pending'
                          }
                          // onClick={() => {
                          //   navigate('/hotel/guest');
                          // }}
                        >
                          Continue
                        </Button>
                      </CardBottom>
                    </Space>
                  </Form>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Rating;

/* <Select
                        size="large"
                        style={{
                          width: '100%'
                        }}
                        placeholder="Select Property Name"
                        options={[
                          {
                            value: '1',
                            label: 'Ravi'
                          },
                          {
                            value: '2',
                            label: 'Msa'
                          },
                          {
                            value: '3',
                            label: 'Taj'
                          },
                          {
                            value: '4',
                            label: 'Amj'
                          }
                        ]}
                      /> */
