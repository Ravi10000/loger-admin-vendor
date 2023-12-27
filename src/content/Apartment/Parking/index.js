import { Button, Card, Col, Radio, Row, Space, Typography, Form } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useMutation } from '@tanstack/react-query';
import onError from 'src/utils/onError';
import { updateProperty } from 'src/api/properties.req';
import {
  useIsHotel,
  useProperty,
  usePropertyId
} from 'src/hooks/property-info.queries';
import Spinner from 'src/components/spinner';

const Parking = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();
  const isHotel = useIsHotel();
  const [isParkingAvailable, setIsParkingAvailable] = useState(null);

  const { property, isFetching } = useProperty(
    [
      'parkingAvailable',
      'parkingReservation',
      'parkingType',
      'parkingLocation',
      'propertyType'
    ],
    property => {
      if (property.parkingAvailable) {
        setIsParkingAvailable(true);
      }
    }
  );

  console.log(property);

  const { status, mutate } = useMutation({
    mutationFn: async data => {
      data.propertyId = propertyId;
      data.route = `/${property.propertyType}/${propertyId}/parking`;
      await updateProperty(data);
      isHotel
        ? navigate(`/hotel/${propertyId}/language`)
        : navigate(`/apartment/${propertyId}/language`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Tell us about the parking situtaion at your apartment
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {isFetching ? (
                  <Spinner />
                ) : (
                  <Form onFinish={mutate} initialValues={property}>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Is Parking Available to Guests?
                        </Typography.Title>
                        <Form.Item
                          name="parkingAvailable"
                          rules={[
                            {
                              required: true,
                              message: 'Please select if parking is available'
                            }
                          ]}
                        >
                          <Radio.Group
                            value={isParkingAvailable}
                            onChange={e => {
                              setIsParkingAvailable(e.target.value);
                            }}
                          >
                            <Space direction="vertical" style={{}}>
                              <Radio value={true}>Yes</Radio>
                              <Radio value={false}>No</Radio>
                            </Space>
                          </Radio.Group>
                        </Form.Item>
                      </Space>
                      {isParkingAvailable && (
                        <>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title level={5}>
                              Do guests need to reserve a parking spot?
                            </Typography.Title>
                            <Form.Item
                              name="parkingReservation"
                              rules={[
                                {
                                  required: isParkingAvailable,
                                  message:
                                    'Please select if parking needs to be reserved'
                                }
                              ]}
                            >
                              <Radio.Group>
                                <Space
                                  direction="vertical"
                                  style={{ width: '100%' }}
                                >
                                  <Radio value={true}>Reservation needed</Radio>
                                  <Radio value={false}>
                                    No reservation needed
                                  </Radio>
                                </Space>
                              </Radio.Group>
                            </Form.Item>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title level={5}>
                              Where is the parking located?
                            </Typography.Title>
                            <Form.Item
                              name="parkingLocation"
                              rules={[
                                {
                                  required: isParkingAvailable,
                                  message:
                                    'Please select if parking is on site or not'
                                }
                              ]}
                            >
                              <Radio.Group>
                                <Space direction="vertical" style={{}}>
                                  <Radio value={'onsite'}>On site</Radio>
                                  <Radio value={'offsite'}>Off site</Radio>
                                </Space>
                              </Radio.Group>
                            </Form.Item>
                          </Space>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Typography.Title level={5}>
                              What type of Parking is it?
                            </Typography.Title>
                            <Form.Item
                              name="parkingType"
                              rules={[
                                {
                                  required: isParkingAvailable,
                                  message:
                                    'Please select if parking is private or public'
                                }
                              ]}
                            >
                              <Radio.Group>
                                <Space direction="vertical" style={{}}>
                                  <Radio value={'private'}>Private </Radio>
                                  <Radio value={'public'}>Public</Radio>
                                </Space>
                              </Radio.Group>
                            </Form.Item>
                          </Space>
                        </>
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
                          disabled={status === 'pending'}
                          // onClick={() => {
                          //   navigate('/apartment/language');
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

export default Parking;
