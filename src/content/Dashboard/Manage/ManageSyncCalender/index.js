import { Button, Col, Row, Space, Typography, Form, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Container, MainWrapper } from 'src/components/Global';
import Card from 'antd/es/card/Card';
import { useSearchParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'src/api';
import AddCalendarModal from 'src/components/add-calendar-popup';
import Spinner from 'src/components/spinner';
import { toast } from 'react-hot-toast';
import { FaCalendar } from 'react-icons/fa6';

function ManageSyncCalender() {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  // const [selectedProperty, setSelectedProperty] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  // const { data: properties } = useQuery({
  //   queryKey: ['my-properties', ['propertyName']],
  //   queryFn: async ({ queryKey }) => {
  //     const res = await api.get(
  //       `/properties/my-properties?select=${queryKey[1].join(
  //         ' '
  //       )}&limit=${Infinity}`
  //     );
  //     if (propertyId) {
  //       const property = res?.data?.properties?.find(
  //         property => property?._id === propertyId
  //       );
  //       setSelectedProperty(property);
  //     } else if (res?.data?.properties?.length)
  //       setSelectedProperty(res?.data?.properties[0]);
  //     return res?.data?.properties;
  //   }
  // });
  const queryClient = useQueryClient();
  const { data: calendars, isFetching: isFetchingCalendars } = useQuery({
    queryKey: ['calendars', propertyId],
    queryFn: async () => {
      const res = await api.get(`/calendar-sync/${propertyId}`);
      console.log({ res });
      return res?.data?.calendars;
    }
  });

  const { mutate } = useMutation({
    mutationFn: async calendarId => {
      const res = await api.delete(`/calendar-sync/${calendarId}`);
      if (res?.data?.status === 'success') {
        queryClient.invalidateQueries(['calendars', propertyId]);
        toast.success('Calendar Deleted Successfully');
      }
    }
  });

  const { mutate: generateCalendar, isPending } = useMutation({
    mutationFn: async () => {
      const res = await api.get(`/calendar/export-ics/${propertyId}`);
      console.log({ res });
      if (res?.data?.status === 'success') {
        toast.success('Calendar Generated Successfully');
      }
    }
  });
  return (
    <>
      <AddCalendarModal
        {...{
          propertyId,
          isOpen,
          close: () => setIsOpen(false)
        }}
      />
      <AddCalendarModal
        {...{
          propertyId,
          selectedCalendar,
          isOpen: !!selectedCalendar,
          close: () => setSelectedCalendar(null)
        }}
      />
      <MainWrapper>
        <Container>
          <Row>
            <Col span={16}>
              <Space
                direction="vertical"
                style={{ marginBottom: '2.5rem', marginRight: '2.5rem' }}
              >
                <Typography.Title level={2}>
                  Synchronise Your Calendar Across Channels
                </Typography.Title>
                <Space style={{ marginBottom: '2.5rem' }}>
                  <Typography.Text>
                    Lorem ipsum dolor sit amet consectetur. Eget vitae nunc
                    tempor sed cras tincidunt. Sit congue in neque massa
                    elementum massa eu aliquam. Eu purus eget integer sed ut
                    laoreet congue id sollicitudin Aliquam enim sed morbi
                    feugiat
                  </Typography.Text>
                </Space>
                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  Add Calendar To Sync
                </Button>
                {/* <Form.Item
                  style={{
                    margin: 0
                  }}
                  label={
                    <Typography.Title level={5}>
                      Select Property
                    </Typography.Title>
                  }
                  labelCol={{ span: 24 }}
                >
                  <Select
                    size="large"
                    placeholder="Select Property"
                    optionFilterProp="children"
                    onChange={property => {
                      setSelectedProperty(JSON.parse(property));
                    }}
                    value={JSON.stringify(selectedProperty)}
                    options={properties?.map(property => ({
                      label: property?.propertyName,
                      value: JSON.stringify(property)
                    }))}
                  />
                </Form.Item> */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  {!!calendars?.length && <h4>Calendars</h4>}
                  {isFetchingCalendars ? (
                    <Spinner />
                  ) : !calendars?.length ? (
                    <Button
                      style={{ height: '100px', color: '#ccc' }}
                      block
                      size="large"
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      No Caledars Found, Click to Add{' '}
                    </Button>
                  ) : (
                    calendars?.map(calendar => (
                      <div
                        key={calendar?._id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          background: '#fff',
                          padding: '20px 10px',
                          borderRadius: '5px'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column'
                            // gap: '10px'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px'
                            }}
                          >
                            <div
                              style={{
                                height: '30px',
                                aspectRatio: '1/1',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#f0f0f0',
                                borderRadius: '50%'
                              }}
                            >
                              <FaCalendar color="#4096ff" />
                            </div>
                            <h4>{calendar?.name}</h4>
                          </div>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            style={{ marginLeft: '35px' }}
                            href={calendar?.url}
                          >
                            {calendar?.url}
                          </a>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <Button
                            ghost
                            type="primary"
                            onClick={() => {
                              setSelectedCalendar(calendar);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            type="primary"
                            danger
                            onClick={() => mutate(calendar._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <Button
                  onClick={generateCalendar}
                  disabled={isPending}
                  loading={isPending}
                >
                  Export Loger Calendar
                </Button>
              </Space>
            </Col>
            <Col span={8}>
              <Space direction="vertical">
                <Typography.Title level={2}>
                  {' '}
                  Get to Know the Status
                </Typography.Title>
                <Card>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ marginBottom: '1rem' }}
                  >
                    <Space direction="vertical">
                      <Typography.Text strong>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                    <Space direction="vertical">
                      <Typography.Text strong>Lorem ipsum </Typography.Text>
                      <Typography.Text>
                        Lorem ipsum dolor sit amet consectetur. pellentesque
                        imperdiet euismod Lorem ipsum dolor sit amet
                      </Typography.Text>
                    </Space>
                  </Space>
                </Card>
                <Typography.Title level={2}>Explore Options</Typography.Title>
                <Card>
                  <Space direction="vertical">
                    <Typography.Text>
                      Lorem ipsum dolor sit amet consectetur. pellentesque
                      imperdiet euismod Lorem ipsum dolor sit ametdolor sit amet
                      consectetur. pellentesque imperdiet euismod Lorem ipsum
                      dolor sit amet Lorem ipsum dolor sit amet consectetur.
                      pellentesque imperdiet euismod Lorem ipsum dolor sit
                      ametdolor sit amet consectetur.{' '}
                    </Typography.Text>
                    <Button style={{ marginTop: '2rem' }} type="primary" ghost>
                      Change
                    </Button>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </Container>
      </MainWrapper>
    </>
  );
}

export default ManageSyncCalender;
