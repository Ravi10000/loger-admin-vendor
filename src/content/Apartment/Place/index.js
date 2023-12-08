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
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  ArrowLeftOutlined,
  LikeOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import api from 'src/api';
import onError from 'src/utils/onError';
import { findProperty, updateProperty } from 'src/api/property.req';

const Place = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const propertyExists = propertyId?.length === 24;
  const { data: property, isFetching } = useQuery({
    queryKey: ['property', propertyId, ['propertyName']],
    enabled: propertyId?.length === 24,
    initialData: {},
    queryFn: async () => {
      const res = await findProperty(propertyId, 'propertyName');
      return res?.data?.property;
    }
  });
  const { mutate, status } = useMutation({
    mutationFn: async data => {
      let res;

      if (propertyExists) {
        data.propertyId = propertyId;
        res = await updateProperty(data);
      } else {
        data.propertyType = 'apartment';
        res = await api.post('/properties', data);
      }
      if (!propertyExists)
        navigate(`/apartment/${res?.data?.property?._id}/place`, {
          replace: true
        });
      navigate(
        `/apartment/${
          propertyExists ? propertyId : res?.data?.property?._id
        }/property`
      );
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });
  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            What's the name of your place?
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {!isFetching ? (
                  <Form
                    layout="vertical"
                    onFinish={mutate}
                    initialValues={{ propertyName: property?.propertyName }}
                  >
                    <Form.Item
                      label="Property Name"
                      rules={[
                        { required: true, message: 'Property name required' }
                      ]}
                      name="propertyName"
                    >
                      <Input size="large" />
                    </Form.Item>
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
                      >
                        Continue
                      </Button>
                    </CardBottom>
                  </Form>
                ) : (
                  <Spin />
                )}
              </Card>
            </Col>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Row gutter={[32, 32]}>
                <Col xs={24}>
                  <Card>
                    <Space
                      size="middle"
                      direction="horizontal"
                      style={{ alignItems: 'flex-start', width: '100%' }}
                    >
                      <Typography.Text style={{ fontSize: '2rem' }}>
                        <LikeOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          What should I consider when choosing a name?
                        </Typography.Title>
                        <ul style={{ marginLeft: '1rem' }}>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                          <li>
                            <Typography.Paragraph>
                              Lorem ipsum dolor sit amet consectetur.
                            </Typography.Paragraph>
                          </li>
                        </ul>
                      </Space>
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      />
                    </Space>
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card>
                    <Space
                      size="middle"
                      direction="horizontal"
                      style={{ alignItems: 'flex-start', width: '100%' }}
                    >
                      <Typography.Text style={{ fontSize: '2rem' }}>
                        <BulbOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          Why do I need to name my property?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet. Lorem eget vivamus id et lacus nulla
                          risus adipiscing molestienulla risus adipiscing
                          molestie. mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie..
                        </Typography.Paragraph>
                      </Space>
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      />
                    </Space>
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

export default Place;
