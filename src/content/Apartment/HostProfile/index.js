import {
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  Row,
  Space,
  Typography,
  Form,
  Spin
} from 'antd';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from 'src/api';
import onError from 'src/utils/onError';
import { findApartment, findHotel } from 'src/api/properties.req';
import { toast } from 'react-hot-toast';
import { useIsHotel } from 'src/hooks/property-info.queries';

const HostProfile = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const [checkList, setCheckList] = useState([]);
  const isHotel = useIsHotel();

  const { data: result, isFetching } = useQuery({
    queryKey: [
      isHotel ? 'hotel' : 'apartment',
      propertyId,
      [
        'aboutNeighborhood',
        'aboutProperty',
        'propertyType',
        ...(isHotel ? [] : ['hostName', 'aboutHost'])
      ]
    ],
    enabled: !!propertyId,
    initialData: {},
    queryFn: async ({ queryKey }) => {
      const res = await (isHotel
        ? findHotel(propertyId, queryKey[2].join(' '))
        : findApartment(propertyId, queryKey[2].join(' ')));
      const result = res?.data?.[isHotel ? 'hotel' : 'apartment'];
      setCheckList([
        ...(isHotel
          ? result?.aboutHost || result?.hostName
            ? ['host']
            : []
          : []),
        ...(result?.aboutProperty ? ['property'] : []),
        ...(result?.aboutNeighborhood ? ['neighborhood'] : [])
      ]);
      return result;
    }
  });

  const { mutate, status } = useMutation({
    mutationFn: async data => {
      if (!checkList.length) {
        toast.error('please select at least one option');
        return;
      }
      if (!checkList.includes('none')) {
        data.propertyId = propertyId;
        data.route = `/${
          isHotel ? 'hotel' : 'apartment'
        }/${propertyId}/host-profile`;
        await api.put(`/${isHotel ? 'hotels' : 'apartments'}`, data);
      }
      navigate(
        `/${isHotel ? 'hotel' : 'apartment'}/${propertyId}/${
          isHotel ? 'new/room-detail' : 'preview-gallery'
        }`
      );
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  const handleChange = item => {
    if (item.includes('none') && !!item.indexOf('none')) {
      setCheckList(['none']);
    } else if (item[0] === 'none' && checkList.length) {
      setCheckList(item.filter(item => item !== 'none'));
    } else {
      setCheckList(item);
    }
  };

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            Host Profile
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {isFetching ? (
                  <Spin />
                ) : (
                  <Form
                    onFinish={mutate}
                    initialValues={{
                      ...(isHotel ? { hostName: result?.hostName || '' } : {}),
                      ...(isHotel
                        ? { aboutHost: result?.aboutHost || '' }
                        : {}),
                      aboutProperty: result?.aboutProperty || '',
                      aboutNeighborhood: result?.aboutNeighborhood || ''
                    }}
                  >
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Typography.Paragraph style={{ marginBottom: 0 }}>
                        Lorem ipsum dolor sit amet consectetur. Eget non ac
                        nascetur facilisi arcu integer ut. Eget lectus amet
                        ipsum pellentesque leo ac. Vulputate eget in tortor orci
                        quam ultricies viverra ipsum pellentesque leo ac.
                        Vulputate eget in tortor orci quam ultricies viverra.
                      </Typography.Paragraph>
                      <Checkbox.Group
                        onChange={handleChange}
                        value={checkList}
                        style={{ width: '100%' }}
                      >
                        <Space
                          direction="vertical"
                          style={{ width: '100%' }}
                          size="large"
                        >
                          <Checkbox value="property">The Property</Checkbox>
                          {checkList.includes('property') && (
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Text>
                                About The Property
                              </Typography.Text>
                              <Form.Item name="aboutProperty">
                                <Input.TextArea placeholder="Lorem ipsum dolor sit amet consectetur. Eget non ac nascetur facilisi arcu integ i" />
                              </Form.Item>
                            </Space>
                          )}
                          {isHotel ? (
                            <></>
                          ) : (
                            <>
                              <Checkbox value="host">The Host</Checkbox>
                              {checkList.includes('host') && (
                                <>
                                  <Space
                                    direction="vertical"
                                    style={{ width: '100%' }}
                                  >
                                    <Typography.Text>Host Name</Typography.Text>
                                    <Form.Item name="hostName">
                                      <Input />
                                    </Form.Item>
                                  </Space>
                                  <Space
                                    direction="vertical"
                                    style={{ width: '100%' }}
                                  >
                                    <Typography.Text>
                                      About The Host
                                    </Typography.Text>
                                    <Form.Item name="aboutHost">
                                      <Input.TextArea placeholder="Lorem ipsum dolor sit amet consectetur. Eget non ac nascetur facilisi arcu integ i" />
                                    </Form.Item>
                                  </Space>
                                </>
                              )}
                            </>
                          )}
                          <Checkbox value="neighborhood">
                            The Neighborhood
                          </Checkbox>
                          {checkList.includes('neighborhood') && (
                            <Space
                              direction="vertical"
                              style={{ width: '100%' }}
                            >
                              <Typography.Text>
                                About The Neighborhood
                              </Typography.Text>
                              <Form.Item name="aboutNeighborhood">
                                <Input.TextArea placeholder="Lorem ipsum dolor sit amet consectetur. Eget non ac nascetur facilisi arcu integ i" />
                              </Form.Item>
                            </Space>
                          )}
                          <Checkbox value="none">
                            None of the Above / I'll Add These Later
                          </Checkbox>
                        </Space>
                      </Checkbox.Group>
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
                          //   navigate('/apartment/gallery');
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
                        <BulbOutlined />
                      </Typography.Text>
                      <Space direction="vertical">
                        <Typography.Title level={4}>
                          Can I make changes to my host profile later?
                        </Typography.Title>
                        <Typography.Paragraph>
                          Lorem ipsum dolor sit amet consectetur. Non in quis
                          ante porttitor praesent volutpat neque. Metus in neque
                          montes id mattis molestie aliquet. Lorem eget vivamus
                          id et lacus nulla risus adipiscing molestie. mattis
                          molestie aliquet. Lorem eget vivamus id et lacus nulla
                          risus adipiscing molestie.
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

export default HostProfile;
