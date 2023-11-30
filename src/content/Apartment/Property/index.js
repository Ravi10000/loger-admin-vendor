import { Button, Card, Col, Form, Input, Row, Select, Typography } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { COUNTRY_LIST as countryList } from 'src/constants/country';
import { EnvironmentOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';
import { useMutation } from '@tanstack/react-query';
import api from 'src/api';
import onError from 'src/utils/onError';
import { updateProperty } from 'src/api/property.req';

const Property = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const { status, mutate, data } = useMutation({
    mutationFn: async data => {
      data.propertyId = propertyId;
      const res = await updateProperty(data);
      console.log({ res });
      navigate(`/apartment/${propertyId}/location`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  console.log({ status, mutate, data });
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Where is the property you're listing ?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Form
                  layout="vertical"
                  onFinish={mutate}
                  initialValues={{
                    country: 'India'
                  }}
                >
                  <Form.Item
                    label="Country"
                    name="country"
                    rules={[{ required: 'Country required' }]}
                  >
                    <Select
                      size="large"
                      options={countryList.map(({ name }) => ({
                        value: name,
                        label: name
                      }))}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: 'Address required' }]}
                  >
                    <Input size="large" suffix={<EnvironmentOutlined />} />
                  </Form.Item>
                  <Row gutter={32}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="City"
                        name="city"
                        rules={[{ required: 'City required' }]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Pincode"
                        name="pincode"
                        rules={[
                          { required: 'Pincode required' },
                          { max: 6, message: 'Pincode must be 6 digits' },
                          { min: 6, message: 'Pincode must be 6 digits' }
                        ]}
                      >
                        <Input
                          size="large"
                          onInput={e =>
                            (e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ''
                            ))
                          }
                          maxLength={6}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
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
                        navigate(-1);
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      block
                      htmlType="submit"
                      // onClick={() => {
                      //   navigate('/apartment/location');
                      // }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Property;
