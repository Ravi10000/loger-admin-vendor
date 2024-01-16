import { Table, Button, Space, Typography, Row, Col, Card } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useApartmentByPropertyId } from 'src/hooks/property-info.queries';
import { useState } from 'react';
import RatePlanPopup from './rate-plan-popup';
import { updateApartment, updateHotel } from 'src/api/properties.req';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const columns = [
  {
    title: 'Rate Plan Name',
    dataIndex: 'RatePlanName',
    key: 'Rate Plan Name'
  },
  {
    title: 'Cancellation Policy ',
    dataIndex: 'CancellationPolicy',
    key: 'Cancellation Policy '
  },
  {
    title: 'Prices',
    dataIndex: 'Price',
    key: 'Price'
  },
  {
    title: 'Discount Applied',
    dataIndex: 'discountApplied',
    key: 'discount applied'
  }
  // {
  //   title: 'Net Revenue',
  //   dataIndex: 'NetRevenue',
  //   key: 'NetRevenue'
  // }
];

function ManagePropertyRatePlans({
  propertyId,
  propertyType,
  content,
  setSelectedPlan
}) {
  const data = [
    {
      key: 'standard',
      RatePlanName: 'Standard Plan',

      CancellationPolicy: content?.freeCancellationBefore
        ? content?.freeCancellationBefore + ' Days'
        : 'No Refund On Cancellation',
      Price: 'Managed by Your Calender',
      description: (
        <Row>
          <Col xs={24}>
            <Card>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Space
                  direction="vertical"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Typography.Text strong>Standard Plan</Typography.Text>
                </Space>
                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBottom: '2rem'
                  }}
                >
                  <Space direction="vertical">
                    <Typography.Text strong>Minimum Stay</Typography.Text>
                    <Typography.Text>No Minimum Length of Stay</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Bookable</Typography.Text>
                    <Typography.Text>Any Time</Typography.Text>
                  </Space>
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>
      )
    }
  ];
  const isHotel = propertyType === 'hotel';
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async ({ plan }) => {
      let res = {};
      if (isHotel) {
        res = await updateHotel({ propertyId, [plan]: 0 });
        console.log({ res });
        toast.success('Rate Plan Deleted Successfully');
      } else {
        res = await updateApartment({
          propertyId,
          [plan]: 0
        });
      }
      queryClient.invalidateQueries([
        isHotel ? 'hotel' : 'apartment',
        propertyId
      ]);
    }
  });

  if (content?.weeklyPlanDiscount) {
    data.push({
      key: 'weekly',
      RatePlanName: 'Weekly Plan',
      CancellationPolicy: content?.freeCancellationBefore
        ? content?.freeCancellationBefore + ' Days'
        : 'No Refund On Cancellation',
      Price: 'Managed by Your Calender',
      discountApplied: content?.weeklyPlanDiscount + '%',
      // NetRevenue: '......',
      description: (
        <Row>
          <Col xs={24}>
            <Card>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Space
                  direction="vertical"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Typography.Text strong>Weekly Plan</Typography.Text>
                </Space>
                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBottom: '2rem'
                  }}
                >
                  <Space direction="vertical">
                    <Typography.Text strong>Minimum Stay</Typography.Text>
                    <Typography.Text>7 Days</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Bookable</Typography.Text>
                    <Typography.Text>Any Time</Typography.Text>
                  </Space>
                </Space>
              </Space>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                <Button
                  type="primary"
                  ghost
                  disabled={isPending}
                  onClick={() => {
                    setSelectedPlan({
                      title: 'Weekly Plan',
                      description:
                        'For booking of stay length of 7 days or more.',
                      plan: 'weeklyPlanDiscount',
                      discount: content?.weeklyPlanDiscount
                    });
                  }}
                >
                  Edit
                </Button>
                <Button
                  danger
                  onClick={() => {
                    mutate({ plan: 'weeklyPlanDiscount' });
                  }}
                >
                  Delete
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      )
    });
  }
  if (content?.monthlyPlanDiscount) {
    data.push({
      key: 'monthly',
      RatePlanName: 'Monthly Plan',
      CancellationPolicy: content?.freeCancellationBefore
        ? content?.freeCancellationBefore + ' Days'
        : 'No Refund On Cancellation',
      Price: 'Managed by Your Calender',
      discountApplied: content?.monthlyPlanDiscount + '%',
      // NetRevenue: '......',
      description: (
        <Row>
          <Col xs={24}>
            <Card>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Space
                  direction="vertical"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Typography.Text strong>Monthly Plan</Typography.Text>
                </Space>
                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBottom: '2rem'
                  }}
                >
                  <Space direction="vertical">
                    <Typography.Text strong>Minimum Stay</Typography.Text>
                    <Typography.Text>30 Days</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Bookable</Typography.Text>
                    <Typography.Text>Any Time</Typography.Text>
                  </Space>
                </Space>
              </Space>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                <Button
                  type="primary"
                  ghost
                  disabled={isPending}
                  onClick={() => {
                    setSelectedPlan({
                      title: 'Monthly Plan',
                      description:
                        'For booking of stay length of 30 days or more.',
                      plan: 'monthlyPlanDiscount',
                      discount: content?.monthlyPlanDiscount
                    });
                  }}
                >
                  Edit
                </Button>
                <Button
                  danger
                  onClick={() => {
                    mutate({ plan: 'monthlyPlanDiscount' });
                  }}
                >
                  Delete
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      )
    });
  }
  if (content?.nonRefundableDiscount) {
    data.push({
      key: 'non-refundable',
      RatePlanName: 'Non-Refundable Plan',
      CancellationPolicy: content?.freeCancellationBefore
        ? content?.freeCancellationBefore + ' Days'
        : 'No Refund On Cancellation',
      Price: 'Managed by Your Calender',
      discountApplied: content?.nonRefundableDiscount + '%',
      // NetRevenue: '......',
      description: (
        <Row>
          <Col xs={24}>
            <Card>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Space
                  direction="vertical"
                  style={{ display: 'flex', justifyContent: 'flex-start' }}
                >
                  <Typography.Text strong>Non-Refundable Plan</Typography.Text>
                </Space>
                <Space
                  direction="horizontal"
                  size="large"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginBottom: '2rem'
                  }}
                >
                  <Space direction="vertical">
                    <Typography.Text strong>Minimum Stay</Typography.Text>
                    <Typography.Text>No Minimum Length of Stay</Typography.Text>
                  </Space>
                  <Space direction="vertical">
                    <Typography.Text strong>Bookable</Typography.Text>
                    <Typography.Text>Any Time</Typography.Text>
                  </Space>
                </Space>
              </Space>
              <Space
                direction="horizontal"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end'
                }}
              >
                <Button
                  type="primary"
                  ghost
                  disabled={isPending}
                  onClick={() => {
                    setSelectedPlan({
                      title: 'Non-Refundable Plan',
                      description:
                        'For booking with no-refund on cancellation.',
                      plan: 'nonRefundableDiscount',
                      discount: content?.nonRefundableDiscount
                    });
                  }}
                >
                  Edit
                </Button>
                <Button
                  danger
                  onClick={() => {
                    mutate({ plan: 'nonRefundableDiscount' });
                  }}
                >
                  Delete
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      )
    });
  }
  return (
    <>
      <Table
        columns={columns}
        pagination={false}
        expandable={{
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <UpOutlined onClick={e => onExpand(record, e)} />
            ) : (
              <DownOutlined onClick={e => onExpand(record, e)} />
            ),
          expandedRowRender: record => (
            <p
              style={{
                margin: 0
              }}
            >
              {record.description}
            </p>
          ),

          rowExpandable: record => record.name !== 'Not Expandable'
        }}
        dataSource={data}
      />
    </>
  );
}

export default ManagePropertyRatePlans;
