import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
  Spin
} from 'antd';
import React from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import { useQuery, useMutation } from '@tanstack/react-query';
import api from 'src/api';
import onError from 'src/utils/onError';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const { data: entity, isFetching } = useQuery({
    queryKey: ['entity'],
    queryFn: async () => {
      const res = await api.get('/legal-entity');
      const entity = res?.data?.entity;
      return entity;
    }
  });
  const { mutate, status } = useMutation({
    mutationFn: async data => {
      console.log({ data });
      await api.put('/legal-entity', data);
      navigate('/dashboard/groups/groups-home');
    },
    onError
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Receiving Payouts from Loger.ma
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Typography.Title level={5} style={{ marginBlock: 0 }}>
                    Bank Details
                  </Typography.Title>
                  <Typography.Paragraph style={{ marginBlock: 0 }}>
                    Lorem ipsum dolor sit amet consectetur. Dolor in scelerisque
                    nibh ornare faucibus. Sapien semper id faucibus dictumst vel
                    risus vitae donec vitae. Lorem ipsum dolor sit amet
                    consectetur. Dolor in scelerisque nibh ornare faucibus.
                    Sapien semper id faucibus dictumst vel risus vitae donec
                    vitae.
                  </Typography.Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    {isFetching ? (
                      <Spin />
                    ) : (
                      <Space
                        direction="vertical"
                        size="large"
                        style={{ width: '100%' }}
                      >
                        <Typography.Title level={5} style={{ marginBottom: 0 }}>
                          New Bank Details
                        </Typography.Title>
                        <Form
                          layout="vertical"
                          initialValues={entity}
                          onFinish={mutate}
                        >
                          <Form.Item
                            label="Bank"
                            name="bankName"
                            rules={[
                              { required: true, message: 'Bank name required' }
                            ]}
                          >
                            <Input.Search allowClear size="large" />
                          </Form.Item>
                          <Form.Item
                            label="Account number"
                            name="bankAccountNumber"
                            rules={[
                              {
                                required: true,
                                message: 'Bank account number required'
                              }
                            ]}
                          >
                            <Input size="large" />
                          </Form.Item>
                          <Form.Item
                            label="Account holder name"
                            name="accountHolderName"
                            extra="The account holder's name must match the bank's records."
                            rules={[
                              {
                                required: true,
                                message: 'Accountholder name required'
                              }
                            ]}
                          >
                            <Input size="large" />
                          </Form.Item>
                          <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                              { required: true, message: 'Address required' }
                            ]}
                          >
                            <Input size="large" />
                          </Form.Item>
                          <Form.Item style={{ marginBottom: 0 }}>
                            <Space
                              style={{
                                width: '100%',
                                justifyContent: 'flex-end'
                              }}
                            >
                              <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                disabled={status === 'pending' || isFetching}
                              >
                                Update bank details
                              </Button>
                            </Space>
                          </Form.Item>
                        </Form>
                      </Space>
                    )}
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Payment;
