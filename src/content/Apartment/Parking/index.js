import { Button, Card, Col, Radio, Row, Space, Typography, Form } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useMutation } from '@tanstack/react-query';
import onError from 'src/utils/onError';
import { updateProperty } from 'src/api/property.req';
import { toast } from 'react-hot-toast';

const Parking = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();

  const { status, mutate, data } = useMutation({
    mutationFn: async data => {
      data.propertyId = propertyId;
      if (data.parkingAvailable) {
        if (typeof data.parkingReservation === 'undefined') {
          toast.error('please select if parking reservation is needed');
          return;
        }
        if (typeof data.parkingLocation === 'undefined') {
          toast.error('please select parking location');
          return;
        }
        if (typeof data.parkingType === 'undefined') {
          toast.error('please select parking type');
          return;
        }
      }
      console.log({ data });
      const res = await updateProperty(data);
      console.log({ res });
      navigate(`/apartment/${propertyId}/language`);
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
                <Form onFinish={mutate}>
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
                        // onChange={handleAllowChild}
                        // value={allowChild}
                        >
                          <Space direction="vertical" style={{}}>
                            {/* <Radio value={true}>Yes, free</Radio> */}
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        Do guests need to reserve a parking spot?
                      </Typography.Title>
                      <Form.Item name="parkingReservation">
                        <Radio.Group>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Radio value={true}>Reservation needed</Radio>
                            <Radio value={false}>No reservation needed</Radio>
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </Space>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Typography.Title level={5}>
                        Where is the parking located?
                      </Typography.Title>
                      <Form.Item name="parkingLocation">
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
                      <Form.Item name="parkingType">
                        <Radio.Group>
                          <Space direction="vertical" style={{}}>
                            <Radio value={'private'}>Private </Radio>
                            <Radio value={'public'}>Public</Radio>
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </Space>
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
                        //   navigate('/apartment/language');
                        // }}
                      >
                        Continue
                      </Button>
                    </CardBottom>
                  </Space>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Parking;
