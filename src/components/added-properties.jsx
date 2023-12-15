import { useState } from 'react';
import { Button, Space, Pagination, Spin, Table, Modal, Skeleton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'src/api';
import Spinner from 'src/components/spinner';
import PropertyProgress from 'src/components/property-progress/property-progress';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
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
  const [propertyToDelete, setPropertyToDelete] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { mutate: deleteProperty, status } = useMutation({
    mutationFn: async () => {
      if (propertyToDelete?.length !== 24) {
        toast.error('Something went wrong!');
        return;
      }
      await api.delete(`/properties/${propertyToDelete}`);
      setPropertyToDelete(null);
      toast.success('Property deleted successfully!');
      queryClient.invalidateQueries(['properties', 'added']);
    }
  });

  const { data: properties, isFetching } = useQuery({
    queryKey: [
      'properties',
      'added',
      ['propertyName', 'country', 'propertyType'],
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
                    // deleteProperty(property._id);
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
    <TableSkeleton />
  ) : (
    <>
      <Modal
        open={!!propertyToDelete}
        title="Delete Property"
        onCancel={() => {
          setPropertyToDelete(null);
        }}
        footer={
          <>
            <p style={{ width: '100%', textAlign: 'center', padding: '20px' }}>
              Are you sure you want to delete this property?
            </p>

            <Button
              danger
              type="primary"
              onClick={deleteProperty}
              disabled={status === 'pending'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                width: 'fit-content'
              }}
            >
              <span>Yes, Delete</span>
              {status === 'pending' && (
                <Spin
                  size="small"
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: '16px', color: '#ff4d4f' }}
                    />
                  }
                />
              )}
            </Button>
            <Button
              onClick={() => {
                setPropertyToDelete(null);
              }}
              disabled={status === 'pending'}
            >
              No, Cancel
            </Button>
          </>
        }
      ></Modal>
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

export default AddedProperties;
