import {
  Button,
  Card,
  Col,
  InputNumber,
  Radio,
  Row,
  Space,
  Typography,
  Form,
  Spin
} from 'antd';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
  ArrowLeftOutlined,
  MinusOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';

import { updateApartment } from 'src/api/properties.req';
import { useMutation } from '@tanstack/react-query';
import onError from 'src/utils/onError';
import { useApartment } from 'src/hooks/property-info.queries';

const ControlButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PropertyDetail = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [childrenAllowed, setChildrenAllowed] = useState(null);
  const [cribOffered, setCribOffered] = useState(null);
  const [maxGuests, setMaxGuests] = useState(1);
  const [bathroomsCount, setBathroomsCount] = useState(1);

  const isCribOptionRequired = childrenAllowed === true;
  const { apartment, isFetching } = useApartment(
    [
      'maxGuests',
      'cribOffered',
      'apartmentSize',
      'bathroomsCount',
      'childrenAllowed'
    ],
    apartment => {
      apartment?.maxGuests && setMaxGuests(apartment?.maxGuests);
      apartment?.bathroomsCount && setBathroomsCount(apartment?.bathroomsCount);
      setChildrenAllowed(apartment?.childrenAllowed ?? null);
      setCribOffered(apartment?.cribOffered ?? null);
    }
  );

  const { status, mutate } = useMutation({
    mutationFn: async data => {
      if (typeof cribOffered !== 'boolean') delete data.cribOffered;
      data = {
        ...data,
        maxGuests,
        bathroomsCount,
        propertyId,
        route: `/apartment/${propertyId}/property-detail`
      };
      if (typeof maxGuests !== 'number') {
        toast.error('invalid max guests value');
        return;
      }
      if (typeof bathroomsCount !== 'number') {
        toast.error('invalid bathroom count value');
        return;
      }
      await updateApartment(data);
      navigate(`/apartment/${propertyId}/breakfast-detail`);
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  const handleAllowChild = e => {
    console.log({ e });
    setChildrenAllowed(e.target.value);
  };

  const handleAllowCribs = e => {
    setCribOffered(e.target.value);
  };

  return (
    <MainWrapper>
      <Container>
        <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
          Property Details
        </Typography.Title>
        <Row>
          <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
            {isFetching ? (
              <Spin />
            ) : (
              <Form
                onFinish={mutate}
                initialValues={
                  apartment?.maxGuests ? apartment : { apartmentSize: 100 }
                }
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}
                >
                  <Card>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          How many guests can stay ?
                        </Typography.Title>
                        <Space.Compact>
                          <ControlButton
                            icon={
                              <MinusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => {
                              if (maxGuests > 1) setMaxGuests(prev => --prev);
                            }}
                          />
                          <InputNumber
                            min={0}
                            value={maxGuests}
                            controls={false}
                            style={{
                              width: '3rem',
                              textAlign: 'center'
                            }}
                            onChange={setMaxGuests}
                          />
                          <ControlButton
                            icon={
                              <PlusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => {
                              setMaxGuests(prev => ++prev);
                            }}
                          />
                        </Space.Compact>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          How many bathrooms are there ?
                        </Typography.Title>
                        <Space.Compact>
                          <ControlButton
                            icon={
                              <MinusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => setBathroomsCount(prev => --prev)}
                          />
                          <InputNumber
                            onChange={setBathroomsCount}
                            min={0}
                            value={bathroomsCount}
                            controls={false}
                            style={{ width: '3rem', textAlign: 'center' }}
                          />
                          <ControlButton
                            icon={
                              <PlusOutlined style={{ fontSize: '0.8rem' }} />
                            }
                            onClick={() => setBathroomsCount(prev => ++prev)}
                          />
                        </Space.Compact>
                      </Space>
                    </Space>
                  </Card>
                  <Card>
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Do you allow children?
                        </Typography.Title>
                        <Form.Item
                          name="childrenAllowed"
                          rules={[
                            {
                              required: true,
                              message:
                                'Please select if you allow children or not'
                            }
                          ]}
                        >
                          <Radio.Group
                            onChange={handleAllowChild}
                            value={childrenAllowed}
                          >
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Space>
                      {childrenAllowed && (
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <Typography.Title level={5}>
                            Do you offer cribs?
                          </Typography.Title>
                          <Typography.Paragraph>
                            Cribs sleep most infants 0-3 years old and are
                            available to guests on request.
                          </Typography.Paragraph>
                          <Form.Item
                            name="cribOffered"
                            rules={[
                              {
                                required: isCribOptionRequired,
                                message:
                                  'Please select if crib is offered or not in this property'
                              }
                            ]}
                          >
                            <Radio.Group
                              onChange={handleAllowCribs}
                              value={cribOffered}
                            >
                              <Radio value={true}>Yes</Radio>
                              <Radio value={false}>No</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Space>
                      )}
                    </Space>
                  </Card>
                  <Card>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        How big is this apartment?
                      </Typography.Title>
                      <Typography.Paragraph>
                        Apartment size - optional
                      </Typography.Paragraph>
                      <Form.Item
                        name="apartmentSize"
                        rules={[
                          {
                            required: true,
                            message: 'Please mention apartment size'
                          }
                        ]}
                      >
                        <InputNumber size="large" addonAfter="sq" />
                      </Form.Item>
                    </Space>
                  </Card>

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
                      //   navigate('/apartment/breakfast-detail');
                      // }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </MainWrapper>
  );
};

export default PropertyDetail;
