import { useState } from 'react';
import { Button, Space, Pagination, Spin, Table } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'src/api';
import Spinner from 'src/components/spinner';
import PropertyProgress from 'src/components/property-progress/property-progress';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Location',
    dataIndex: 'Location',
    key: 'Location'
  },
  {
    title: 'Registration Progress',
    dataIndex: 'RegistrationProgress',
    key: 'RegistrationProgress'
  },

  {
    title: 'Action',
    dataIndex: 'Action',
    key: 'Action'
  },
  {
    title: 'Delete',
    dataIndex: 'Delete',
    Key: 'Delete'
  }
];

const limit = 6;
function AddedProperties() {
  const [totalAddedPropertiesPages, setTotalAddedPropertiesPages] = useState(0);
  const [propertyToDelete, setPropertyToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const { mutate: deleteProperty, status } = useMutation({
    mutationFn: async propertyId => {
      await api.delete(`/properties/${propertyId}`);
      setPropertyToDelete(null);
      queryClient.invalidateQueries(['properties', 'added']);
    }
  });

  const { data: properties, isFetching } = useQuery({
    queryKey: [
      'properties',
      'added',
      ['propertyName', 'country', 'propertyType'],
      currentPage
    ],
    queryFn: async ({ queryKey }) => {
      const res = await api.get(
        `/properties/my-properties?status=${
          queryKey[1]
        }&select=${queryKey[2]?.join(' ')}&page=${queryKey[3]}`
      );
      if (res?.data?.totalPages)
        setTotalAddedPropertiesPages(res.data.totalPages);

      const tableData = [];
      res.data.properties.forEach(property => {
        tableData.push({
          key: property?._id,
          name: property?.propertyName,
          Location: property?.country,
          RegistrationProgress: <PropertyProgress propertyId={property?._id} />,
          Action: (
            <Link
              to={`/${property?.propertyType}/${property?._id}/${
                property?.propertyType === 'apartment' ? 'place' : 'property'
              }`}
            >
              Continue Registration
            </Link>
          ),
          Delete: (
            <Space size="middle">
              {status === 'pending' && propertyToDelete === property?._id ? (
                <Spin />
              ) : (
                <Button
                  icon={<DeleteOutlined />}
                  type="text"
                  danger
                  onClick={() => {
                    setPropertyToDelete(property._id);
                    deleteProperty(property._id);
                  }}
                >
                  Delete
                </Button>
              )}
            </Space>
          )
        });
      });
      return tableData;
    }
  });
  return isFetching ? (
    <Spinner />
  ) : (
    <>
      <Table pagination={false} columns={columns} dataSource={properties} />
      <Pagination
        showLessItems
        current={currentPage}
        total={totalAddedPropertiesPages * limit}
        defaultPageSize={limit}
        onChange={value => {
          setCurrentPage(value);
        }}
      />
    </>
  );
}

export default AddedProperties;
