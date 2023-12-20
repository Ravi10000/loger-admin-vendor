import {
  Button,
  Card,
  Checkbox,
  Col,
  Row,
  Space,
  TimePicker,
  Typography,
  Form
} from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowLeftOutlined,
  BulbOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { CardBottom, Container, MainWrapper } from 'src/components/Global';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import onError from 'src/utils/onError';
import {
  updateApartment,
  updateHotel,
  updateProperty
} from 'src/api/properties.req';
import dayjs from 'dayjs';
import {
  useIsHotel,
  useProperty,
  usePropertyContent,
  usePropertyId
} from 'src/hooks/property-info.queries';
import Spinner from 'src/components/spinner';

const Rules = () => {
  const navigate = useNavigate();
  const propertyId = usePropertyId();
  const isHotel = useIsHotel();

  const { content, isFetching: isFetchingContent } = usePropertyContent([
    'partiesEventsAllowed',
    'petsAllowed',
    'smokingAllowed'
  ]);
  const { property, isFetching: isFetchingProperty } = useProperty([
    'checkOutEndTime',
    'checkOutStartTime',
    'checkInEndTime',
    'checkInStartTime'
  ]);

  const { mutate, status } = useMutation({
    mutationFn: async data => {
      if (data.checkIn?.length !== 2) {
        toast.error('please provide both check in start and end time');
        return;
      }
      if (data.checkOut?.length !== 2) {
        toast.error('please provide both check out start and end time');
        return;
      }
      const propertyData = {
        propertyId,
        checkInStartTime: dayjs(data.checkIn[0]).format('HH:mm'),
        checkInEndTime: dayjs(data.checkIn[1]).format('HH:mm'),
        checkOutStartTime: dayjs(data.checkOut[0]).format('HH:mm'),
        checkOutEndTime: dayjs(data.checkOut[1]).format('HH:mm')
      };
      // console.log({ data, propertyData });

      // const res =
      await updateProperty(propertyData);
      const contentData = {
        propertyId,
        petsAllowed: data.activities.includes('pets'),
        smokingAllowed: data.activities.includes('smoking'),
        partiesEventsAllowed: data.activities.includes('parties')
      };
      if (isHotel) {
        await updateHotel(contentData);
        navigate(`/hotel/${propertyId}/host-profile`);
      } else {
        await updateApartment(contentData);
        navigate(`/apartment/${propertyId}/host-profile`);
      }
    },
    onError: (...props) => onError(...props, 'Something Went Wrong')
  });

  return (
    <>
      <MainWrapper>
        <Container>
          <Typography.Title level={2} style={{ marginBottom: '2.5rem' }}>
            House Rules
          </Typography.Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={20} lg={16} xl={12} xxl={8}>
              <Card>
                {isFetchingContent || isFetchingProperty ? (
                  <Spinner />
                ) : (
                  <Form
                    onFinish={mutate}
                    initialValues={{
                      checkIn:
                        property.checkInStartTime && property.checkInEndTime
                          ? [
                              dayjs()
                                .set(
                                  'hour',
                                  property.checkInStartTime.split(':')[0]
                                )
                                .set(
                                  'minute',
                                  property.checkInStartTime.split(':')[1]
                                )
                                .set('second', 0),
                              dayjs()
                                .set(
                                  'hour',
                                  property.checkInEndTime.split(':')[0]
                                )
                                .set(
                                  'minute',
                                  property.checkInEndTime.split(':')[1]
                                )
                                .set('second', 0)
                            ]
                          : [],
                      checkOut:
                        property.checkOutStartTime && property.checkOutEndTime
                          ? [
                              dayjs()
                                .set(
                                  'hour',
                                  property.checkOutStartTime.split(':')[0]
                                )
                                .set(
                                  'minute',
                                  property.checkOutStartTime.split(':')[1]
                                )
                                .set('second', 0),
                              dayjs()
                                .set(
                                  'hour',
                                  property.checkOutEndTime.split(':')[0]
                                )
                                .set(
                                  'minute',
                                  property.checkOutEndTime.split(':')[1]
                                )
                                .set('second', 0)
                            ]
                          : [],
                      activities: [
                        ...(content?.petsAllowed ? ['pets'] : []),
                        ...(content?.smokingAllowed ? ['smoking'] : []),
                        ...(content?.partiesEventsAllowed ? ['parties'] : [])
                      ]
                    }}
                  >
                    <Space
                      direction="vertical"
                      size="large"
                      style={{ width: '100%' }}
                    >
                      <Form.Item name="activities">
                        <Checkbox.Group>
                          <Space direction="vertical" style={{ width: '100%' }}>
                            <Checkbox value="smoking">
                              Smoking is shared area allowed
                            </Checkbox>
                            <Checkbox value="pets">Pets allowed</Checkbox>
                            <Checkbox value="parties">
                              Parties/ events allowed
                            </Checkbox>
                          </Space>
                        </Checkbox.Group>
                      </Form.Item>

                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>Check in</Typography.Title>
                        <Form.Item name="checkIn">
                          <TimePicker.RangePicker
                            format="HH:mm"
                            size="large"
                            style={{ width: '100%' }}
                            placeholder={['From', 'Until']}
                          />
                        </Form.Item>
                      </Space>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Typography.Title level={5}>Check Out</Typography.Title>
                        <Form.Item name="checkOut">
                          <TimePicker.RangePicker
                            format="HH:mm"
                            size="large"
                            style={{ width: '100%' }}
                            placeholder={['From', 'Until']}
                          />
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
                          disabled={status === 'pending'}
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
                          What If My Rules Change ?
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

export default Rules;
