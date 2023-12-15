import { useState } from 'react';
import { Table, Space, Pagination, Skeleton } from 'antd';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Property',
    dataIndex: 'property',
    key: 'property'
  },
  {
    title: 'Status on Loger.ma',
    dataIndex: 'status',
    key: 'status'
  },

  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location'
  },
  {
    title: 'Departures in Next 48hrs',
    dataIndex: 'departures',
    Key: 'departures'
  },
  {
    title: 'Loger.ma Messages',
    dataIndex: 'messages',
    Key: 'messages'
  },
  {
    title: 'Guests Messages',
    dataIndex: 'guestsMessages',
    Key: 'guestsMessages'
  }
];
const limit = 6;
function ActiveProperties() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const { data: properties, isFetching } = useQuery({
    queryKey: [
      'properties',
      'approved',
      ['propertyName', 'country', 'city', 'propertyType'],
      page
    ],
    queryFn: async ({ queryKey }) => {
      const res = await api.get(
        `/properties/my-properties?status=${
          queryKey[1]
        }&select=${queryKey[2]?.join(' ')}&page=${queryKey[3]}`
      );
      if (res?.data?.totalPages) setTotalPages(res.data.totalPages);

      const tableData = [];
      res.data.properties.forEach(property => {
        tableData.push({
          key: property?._id,
          id: property?._id,
          property: property?.propertyName,
          location: property?.country + ', ' + property?.city,
          status: (
            <p
              style={{
                backgroundColor: '#2ba84a',
                textAlign: 'center',
                color: '#fff',
                borderRadius: '20px',
                padding: '5px'
              }}
            >
              Approved
            </p>
          )
        });
      });
      return tableData;
    }
  });
  return isFetching ? (
    <TableSkeleton />
  ) : (
    <>
      <Table pagination={false} columns={columns} dataSource={properties} />
      <Pagination
        style={{
          marginTop: '20px',
          marginLeft: 'auto',
          width: 'fit-content'
        }}
        showLessItems
        current={page}
        total={totalPages * limit}
        defaultPageSize={limit}
        onChange={setPage}
      />
    </>
  );
}

function TableSkeleton() {
  return <Skeleton loading active style={{ maxWidth: '800px' }}></Skeleton>;
}

export default ActiveProperties;
