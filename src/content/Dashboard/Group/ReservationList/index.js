import { useState } from 'react';
import { Space, Typography, Select, Button, Table, Form, Skeleton } from 'antd';
import { Container, MainWrapper } from 'src/components/Global';
import { DownloadOutlined, PrinterOutlined } from '@ant-design/icons';

import { DatePicker } from 'antd';
import { useDocumentTitle } from '@uidotdev/usehooks';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import api from 'src/api';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Reservation No.',
    dataIndex: 'ReservationNo'
  },
  {
    title: 'Property Name',
    dataIndex: 'PropertyName'
  },
  // {
  //   title: 'Location',
  //   dataIndex: 'Location'
  // },
  {
    title: 'Guest Name',
    dataIndex: 'GuestName'
    // render: (_, record) => (
    //   <Space direction="vertical" size="small">
    //     <a>{record.GuestName}</a>
    //     <Space direction="horizontal" size="small">
    //       <Typography.Text>2 adults</Typography.Text>
    //       <Typography.Text>1 child</Typography.Text>
    //     </Space>
    //   </Space>
    // )
  },
  {
    title: 'Guest Phone No',
    dataIndex: 'GuestPhoneNo'
  },
  {
    title: 'Check In',
    dataIndex: 'CheckIn'
  },
  {
    title: 'Check Out',
    dataIndex: 'CheckOut'
  },
  {
    title: 'Status',
    dataIndex: 'Status'
    // render: (_, record) => (
    //   <Space direction="vertical">
    //     <Typography.Text>Paid</Typography.Text>
    //     <Typography.Text>Online</Typography.Text>
    //   </Space>
    // )
  },
  {
    title: 'Total Payment',
    dataIndex: 'TotalPayment'
  },
  {
    title: 'Taxes & Charges',
    dataIndex: 'TaxesCharges'
  },
  {
    title: 'Booked On',
    dataIndex: 'BookedOn'
  },
  {
    title: 'Arival Time',
    dataIndex: 'ArivalTime'
  }
];

// const data = [
//   {
//     key: '1',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   },
//   {
//     key: '2',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   },
//   {
//     key: '3',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   },
//   {
//     key: '4',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   },
//   {
//     key: '5',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   },
//   {
//     key: '6',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   },
//   {
//     key: '7',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   },
//   {
//     key: '8',
//     ReservationNo: '2564568732',
//     PropertyName: 'Westheimer Rd. Santa Ana, ',
//     Location: 'Mahipal Khandari, Haridwar, India',
//     GuestName: 'Richard Parker',
//     GuestPhoneNo: '+91 987 654 1230',
//     CheckIn: '13 july 2023',
//     CheckOut: '17 july 2023',
//     Status: 'Paid',
//     TotalPayment: '₹ 900',
//     TaxesCharges: '₹ 900',
//     BookedOn: '13 July 2023',
//     ArivalTime: '09:00 am'
//   }
// ];

function ReservationList() {
  const navigate = useNavigate();
  useDocumentTitle('Loger | Reservations');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [dates, setDates] = useState(null);
  const { data: properties } = useQuery({
    queryKey: ['my-properties', ['propertyName']],
    queryFn: async ({ queryKey }) => {
      const res = await api.get(
        `/properties/my-properties?select=${queryKey[1].join(
          ' '
        )}&limit=${Infinity}`
      );
      console.log({ res });
      if (res?.data?.properties?.length)
        setSelectedProperty(res?.data?.properties[0]);
      return res?.data?.properties;
    }
  });
  const { data: bookings, isFetching: isFetchingBookings } = useQuery({
    enabled: !!selectedProperty,
    queryKey: ['bookings', selectedProperty?._id, dates],
    queryFn: async () => {
      let query = '';
      if (dates?.from && dates?.to) {
        query = `?from=${dates?.from}&to=${dates?.to}`;
      }
      const bookingsRes = await api.get(
        `/booking/${selectedProperty?._id}${query}`
      );
      console.log({ bookingsRes });
      // {
      //   key: '1', _id
      //   ReservationNo: '2564568732', Date
      //   PropertyName: 'Westheimer Rd. Santa Ana, ', propertyname
      //   Location: 'Mahipal Khandari, Haridwar, India', property location
      //   GuestName: 'Richard Parker',
      //   GuestPhoneNo: '+91 987 654 1230', phone
      //   CheckIn: '13 july 2023', checkin
      //   CheckOut: '17 july 2023', checkout
      //   Status: 'Paid', status
      //   TotalPayment: '₹ 900', price
      //   TaxesCharges: '₹ 900',
      //   BookedOn: '13 July 2023', created at
      //   ArivalTime: '09:00 am'
      // },
      const data = bookingsRes?.data?.bookings?.map(booking => {
        const { property, transaction } = booking;
        // const pkgDetails = JSON.parse(booking?.pkgDetails);

        return {
          key: booking?._id,
          ReservationNo: new Date(booking?.createdAt).getTime(),
          PropertyName: property?.propertyName,
          GuestName: transaction?.firstName + ' ' + transaction?.firstName,
          GuestPhoneNo: transaction?.phone,
          CheckIn: dayjs(booking?.checkInDate).format('DD MMM YYYY'),
          CheckOut: dayjs(booking?.checkOutDate).format('DD MMM YYYY'),
          Status: booking?.status,
          TotalPayment: transaction?.discountedAmount,
          BookedOn: dayjs(transaction?.createdAt).format('DD MMM YYYY')
        };
      });
      return data || [];
    }
  });
  console.log({ bookings });
  return (
    <MainWrapper>
      <Container>
        <Space direction="vertical">
          <Space
            direction="horizontal"
            style={{
              width: '100%',
              alignItem: 'center',
              marginBottom: '2.5rem'
            }}
          >
            <Typography.Title style={{ width: 'max-content' }} level={2}>
              Reservations
            </Typography.Title>
            <PrinterOutlined style={{ marginLeft: '60rem' }} />
            <Button type="text">Print Reservation List</Button>
            <DownloadOutlined style={{ marginLeft: '5rem' }} />
            <Button type="text">Downloaded</Button>
          </Space>
          {/* <Space direction="horizontal" size={12}> */}
          {isFetchingBookings || !bookings ? (
            <BookingFormSkeleton />
          ) : (
            <Form
              onFinish={values => {
                const { dates } = values;
                const from = dayjs(dates[0]).format('YYYY-MM-DD');
                const to = dayjs(dates[1]).format('YYYY-MM-DD');
                setDates({ from, to });
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  margin: 0,
                  height: 'fit-content',
                  marginBlock: '20px'
                }}
              >
                <Form.Item
                  style={{
                    margin: 0
                  }}
                  label={
                    <Typography.Title level={5}>Select Date</Typography.Title>
                  }
                  labelCol={{ span: 24 }}
                  name={'dates'}
                >
                  <RangePicker
                    size="large"
                    format="YYYY-MM-DD"
                    // onChange={onChange}
                    // onOk={onOk}
                  />
                </Form.Item>
                <Form.Item
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
                </Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: '30px' }}
                >
                  Show Results
                </Button>
                {/* <Select
              showSearch
              placeholder="filter"
              style={{ marginLeft: '25rem', width: 300 }}
            /> */}
              </div>
            </Form>
          )}
          {isFetchingBookings || !bookings ? (
            <TableSkeleton />
          ) : (
            <Table
              pagination={false}
              columns={columns}
              dataSource={bookings}
              size="middle"
              onRow={record => ({
                onClick() {
                  navigate(`/dashboard/groups/reservations/${record.key}`);
                }
              })}
            />
          )}
        </Space>
      </Container>
    </MainWrapper>
  );
}

function BookingFormSkeleton() {
  return (
    <Space
      style={{
        width: '100%',
        display: 'flex',
        gap: '30px',
        justifyContent: 'space-between',
        marginBlock: '20px'
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
    </Space>
  );
}

function TableSkeleton() {
  return (
    <>
      <Skeleton.Button
        block
        size="large"
        style={{ borderRadius: 0 }}
        active
      ></Skeleton.Button>
      <Skeleton.Button
        size="large"
        style={{ borderRadius: 0 }}
        block
        active
      ></Skeleton.Button>
      <Skeleton.Button
        size="large"
        style={{ borderRadius: 0 }}
        block
        active
      ></Skeleton.Button>
    </>
  );
}

export default ReservationList;
