import {
  Button,
  Card,
  Col,
  InputNumber,
  Radio,
  Row,
  Space,
  Typography,
  Form
} from 'antd';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
  ArrowLeftOutlined,
  MinusOutlined,
  PlusOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import { Container, MainWrapper, CardBottom } from 'src/components/Global';

import { updateApartment } from 'src/api/property.req';
import { useMutation } from '@tanstack/react-query';
import onError from 'src/utils/onError';

const ControlButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PropertyDetail = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [childrenAllowed, setChildrenAllowed] = useState(true);
  const [cribOffered, setCribOffered] = useState(true);
  const [maxGuests, setMaxGuests] = useState(1);
  const [bathroomsCount, setBathroomsCount] = useState(1);

  const { status, mutate, data } = useMutation({
    mutationFn: async data => {
      data = { ...data, childrenAllowed, cribOffered, maxGuests, propertyId };
      console.log({ data });
      if (typeof maxGuests !== 'number') {
        toast.error('invalid max guests value');
        return;
      }
      const res = await updateApartment(data);
      console.log({ res });
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
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Property Details
          </Typography.Title>
          <Row>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Form onFinish={mutate} initialValues={{ apartmentSize: 100 }}>
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
                        <Radio.Group
                          onChange={handleAllowChild}
                          value={childrenAllowed}
                        >
                          <Radio value={true}>Yes</Radio>
                          <Radio value={false}>No</Radio>
                        </Radio.Group>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>
                          Do you offer cribs?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Cribs sleep most infants 0-3 years old and are
                          available to guests on request.
                        </Typography.Paragraph>
                        <Radio.Group
                          onChange={handleAllowCribs}
                          value={cribOffered}
                        >
                          <Radio value={true}>Yes</Radio>
                          <Radio value={false}>No</Radio>
                        </Radio.Group>
                      </Space>
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
                        navigate('/apartment/location');
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
                      //   navigate('/apartment/breakfast-detail');
                      // }}
                    >
                      Continue
                    </Button>
                  </CardBottom>
                </Space>
              </Form>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default PropertyDetail;

{
  /* <Card>
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: '100%' }}
                  >
                    <Typography.Title level={5}>
                      Where can people sleep ?
                    </Typography.Title>
                    <Card size="small">
                      <Space direction="vertical">
                        <Typography.Text>
                          <b>Bedroom 1</b>
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          1 double bed
                        </Typography.Text>
                      </Space>
                    </Card>
                    <Card size="small">
                      <Space direction="vertical">
                        <Typography.Text>
                          <b>Living room</b>
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          1 double bed
                        </Typography.Text>
                      </Space>
                    </Card>
                    <Card size="small">
                      <Space direction="vertical">
                        <Typography.Text>
                          <b>Other spaces</b>
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          1 double bed
                        </Typography.Text>
                      </Space>
                    </Card>
                    <Button type="primary" ghost icon={<PlusCircleOutlined />}>
                      Add Bedroom
                    </Button>
                  </Space>
                </Card> */
}
