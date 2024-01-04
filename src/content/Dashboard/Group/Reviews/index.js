import React, { useState } from 'react';
import { Row, Space, Typography, Select, Button, Form, Skeleton } from 'antd';
import { Container, MainWrapper } from 'src/components/Global';

import { DatePicker } from 'antd';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
import ReviewCard from 'src/components/review-card';
import { useDocumentTitle } from '@uidotdev/usehooks';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const onChang = value => {
  console.log(`selected ${value}`);
};
const onSearc = value => {
  console.log('search:', value);
};
function Reviews() {
  useDocumentTitle('Loger | Reviews');
  const [selectedProperty, setSelectedProperty] = useState(null);
  console.log({ selectedProperty });
  const [dates, setDates] = useState(null);
  const { data: properties, isFetching: isFetchingProperties } = useQuery({
    queryKey: ['my-properties', ['propertyName'], dates],
    queryFn: async ({ queryKey }) => {
      const res = await api.get(
        `/properties/my-properties?select=${queryKey[1].join(
          ' '
        )}&limit=${Infinity}`
      );
      setSelectedProperty(res?.data?.properties[0]);
      return res?.data?.properties;
    }
  });

  const { data: reviews, isFetching: isFetchingReviews } = useQuery({
    queryKey: ['reviews', selectedProperty?._id],
    enabled: !!selectedProperty,
    queryFn: async () => {
      let query = '';
      if (dates?.from && dates?.to) {
        query = `?from=${dates?.from}&to=${dates?.to}`;
      }
      const reviewsRes = await api.get(
        `/review/${selectedProperty?._id}${query}`
      );
      return reviewsRes?.data?.reviews || [];
    }
  });

  return (
    <MainWrapper>
      <Container>
        <Typography.Title style={{ marginBottom: '2.5rem' }} level={2}>
          Reviews
        </Typography.Title>
        {isFetchingProperties ? (
          <ReviewFormSkeleton />
        ) : (
          <Form
            onFinish={values => {
              const { dates } = values;
              const from = dayjs(dates[0]).format('YYYY-MM-DD');
              const to = dayjs(dates[1]).format('YYYY-MM-DD');
              setDates({ from, to });
            }}
          >
            <Space
              // direction="horizontal"
              size="large"
              style={{ width: '100%', alignItems: 'center' }}
            >
              {/* <Form.Item
                label={
                  <Typography.Title level={5}>Filter by Dates</Typography.Title>
                }
                labelCol={{ span: 24 }}
              >
                <RangePicker
                  size="large"
                  value={dates || value}
                  disabledDate={disabledDate}
                  onCalendarChange={val => {
                    setDates(val);
                  }}
                  onChange={val => {
                    setValue(val);
                  }}
                  onOpenChange={onOpenChange}
                  changeOnBlur
                />
              </Form.Item> */}

              <Form.Item
                style={{
                  margin: 0
                }}
                label={
                  <Typography.Title level={5}>Select Date</Typography.Title>
                }
                labelCol={{ span: 24 }}
                name="dates"
              >
                <RangePicker size="large" format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item
                label={
                  <Typography.Title level={5}>Select Property</Typography.Title>
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
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Show Reviews
              </Button>

              <Select
                style={{ marginLeft: '20rem' }}
                showSearch
                placeholder="Search by Score Date & Comment"
                optionFilterProp="children"
                onChange={onChang}
                onSearch={onSearc}
              />
            </Space>
          </Form>
        )}
        <Row gutter={[32, 32]}>
          {isFetchingReviews ? (
            <ReviewCardSkeleton />
          ) : reviews?.length ? (
            reviews?.map(review => (
              <ReviewCard key={review._id} review={review} />
            ))
          ) : (
            <div
              style={{
                background: '#fff',
                height: '200px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                color: 'lightgray'
              }}
            >
              <h3>No Reviews Found</h3>
            </div>
          )}
        </Row>
      </Container>
    </MainWrapper>
  );
}

function ReviewFormSkeleton() {
  return (
    <Space
      style={{
        width: '100%',
        display: 'flex',
        gap: '30px',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', gap: '30px' }}>
        <Skeleton.Input active size="large" style={{ width: '250px' }} />
        <Skeleton.Button active size="large" block style={{ width: '180px' }} />
        <Skeleton.Button
          active={true}
          size="large"
          block
          style={{ width: '150px' }}
        />
      </div>
      <Skeleton.Input active size="large" style={{ width: '300px' }} />
    </Space>
  );
}

function ReviewCardSkeleton() {
  return (
    <Skeleton loading active avatar style={{ maxWidth: '800px' }}></Skeleton>
  );
}

export default Reviews;
